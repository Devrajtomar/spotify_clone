import { CardInfo } from "@/contexts/store";
import React from "react";
import { HiArrowDown, HiUser } from "react-icons/hi2";
import { VscLocation, VscMail } from "react-icons/vsc";
const Card = () => {
  const { Info } = CardInfo();
  return (
    <div className="Card">
      <div className="w-16 h-16 p-2 rounded-full bg-sky-100 drop-shadow-lg bg-opacity-70">
        <div className="w-full h-full p-2 rounded-full bg-sky-200">
          <div className="w-full h-full p-2 rounded-full bg-sky-300 flex justify-center items-center">
            <HiUser size={20} />
          </div>
        </div>
      </div>
      <div>
        <div className="Heading_1">Devraj Sondhiya</div>
        <div className="Heading_2">Mern Stack Web Developer</div>
      </div>
      <div className="flex justify-start items-center gap-2">
        {Info.map((info) => (
          <div>
            {info.icon}
            {info.title}
          </div>
        ))}
      </div>
      <div>
        <div>
          <VscMail />
          <div>E-mail:</div>
        </div>
        <div>
          <HiArrowDown />
          <div>E-mail:</div>
        </div>
        <div>
          <VscLocation />
          <div>Address:</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
