import Image from "next/image";
import { navigation } from "../../../contexts/store";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DesktopSideBar = () => {
  const { SideBar, setSideBar } = navigation();

  return (
    <div className="DesktopSideBar">
      <div className="FlexBetween">
        <Image
          src="/next.svg"
          alt="next"
          height="60"
          width="60"
          className="Avatar"
        />
        <AiOutlineCloseCircle
          size={40}
          className="Btn self-start"
          onClick={() => setSideBar(!SideBar)}
        />
      </div>
      <div className="flex-grow">Home</div>
      <div>CopyRight</div>
    </div>
  );
};

export default DesktopSideBar;
