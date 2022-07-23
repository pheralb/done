import { IconProps } from "@chakra-ui/react";

// Sidebar ->
export interface SidebarProps {
  width?: string;
  display?: object;
  borderRight?: string;
  children?: React.ReactNode;
}

export interface SidebarItemProps {
  icon: any;
  onClick?: () => void;
  children?: React.ReactNode;
}
