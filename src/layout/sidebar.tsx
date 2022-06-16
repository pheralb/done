import { SidebarProps } from "@/interfaces/sidebar";
import Item from "@/layout/item";
import {
  Check,
  Gear,
  PaperPlaneTilt,
  Star,
  SunDim,
  Wrench,
} from "phosphor-react";
import Auth from "@/components/auth";
import Create from "@/components/task/create";

const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <Auth />
      <Create />
      <Item title="My day">My day</Item>
      <Item title="Important">Important</Item>
      <Item title="Planning">Planning</Item>
      <Item title="Work">Completed</Item>
      <Item title="Work">Settings</Item>
    </>
  );
};

export default Sidebar;
