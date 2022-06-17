import Sidebar from "@/components/sidebar";
import { SidebarProps } from "@/interfaces/sidebar";
import { List } from "phosphor-react";

const Index = (props: SidebarProps) => {
  return (
    <>
      <Sidebar>{props.children}</Sidebar>
    </>
  );
};

export default Index;
