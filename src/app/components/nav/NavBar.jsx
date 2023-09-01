import { navigation } from "../../../contexts/store";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const { SideBar, setSideBar } = navigation();
  return (
    <div className="NavBar">
      <div>logo</div>
      <div>menu</div>
      <AiOutlineMenu
        size={40}
        className="Btn self-start"
        onClick={() => setSideBar(!SideBar)}
      />
    </div>
  );
};

export default NavBar;
