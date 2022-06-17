import { styled } from "stitches.config";
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

// Sidebar Imports:
import { SidebarProps } from "@/interfaces/sidebar";
import { SidebarStyle } from "@/components/sidebar/style";
import Item from "@/components/sidebar/item";

const Section = styled("section", {
  minHeight: "100vh",
});

const Content = styled("div", {
  marginLeft: "240px",
  transition: "margin-left 0.3s ease-in-out",
  padding: "20px",
});

const Index = (props: SidebarProps) => {
  return (
    <Section>
      <SidebarStyle>
        <Auth />
        <Create />
        <Item title="My day">My day</Item>
        <Item title="Important">Important</Item>
        <Item title="Planning">Planning</Item>
        <Item title="Work">Completed</Item>
        <Item title="Work">Settings</Item>
      </SidebarStyle>
      <Content>{props.children}</Content>
    </Section>
  );
};

export default Index;
