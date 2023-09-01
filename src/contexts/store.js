import { HiOutlineAcademicCap } from "react-icons/hi2";
import { create } from "zustand";

export const navigation = create((set) => ({
  SideBar: false,
  setSideBar: (value) =>
    set({
      SideBar: value,
    }),
}));

export const CardInfo = create((set) => ({
  Info: [
    { title: "hi", info: "", icon: <HiOutlineAcademicCap /> },
    { title: "hi", info: "", icon: <HiOutlineAcademicCap /> },
    { title: "hi", info: "", icon: <HiOutlineAcademicCap /> },
    { title: "hi", info: "", icon: <HiOutlineAcademicCap /> },
  ],
}));
