import Tap from "@/animations/tap";
import { SidebarItemProps } from "@/interfaces/sidebar";

const Item = (props: SidebarItemProps) => {
  return (
    <>
      {props.icon}
      {props.children}
    </>
  );
};

export default Item;
