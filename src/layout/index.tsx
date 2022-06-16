import Sidebar from "@/layout/sidebar";
import { SidebarProps } from "@/interfaces/sidebar";
import { List } from "phosphor-react";

const Index = (props: SidebarProps) => {
  return <>{props.children}</>;
};

export default Index;
