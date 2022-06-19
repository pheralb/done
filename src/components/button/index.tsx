import { ButtonProps } from "@/interfaces/button";
import { ButtonStyled } from "./style";

const Index = (props: ButtonProps) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Index;
