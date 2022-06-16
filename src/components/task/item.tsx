import { TaskProps } from "@/interfaces/task";
import { Circle } from "phosphor-react";

const Item = (props: TaskProps) => {
  return (
    <>
      {props.title}
      {props.createdAt}
    </>
  );
};

export default Item;
