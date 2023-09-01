"use client";

import NavBar from "./components/nav/NavBar";
import DesktopSideBar from "./components/nav/DesktopSideBar";
import MobileSideBar from "./components/nav/MobileSideBar";
import Main from "./components/nav/Main";
import { navigation } from "../contexts/store";
const Home = () => {
  const { SideBar } = navigation();
  return (
    <div className="Home">
      {SideBar && <DesktopSideBar />}
      {SideBar && <MobileSideBar />}
      <div className="w-full h-full">
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
