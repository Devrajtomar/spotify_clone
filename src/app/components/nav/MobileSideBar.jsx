import Image from "next/image";
import { navigation } from "../../../contexts/store";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileSideBar = () => {
  const { setSideBar, SideBar } = navigation();

  return (
    <div className="MobileSideBar">
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
      <div className="flex justify-start items-start flex-col flex-grow w-full">
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
      <div>CopyRights</div>
    </div>
  );
};

export default MobileSideBar;
