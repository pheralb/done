export interface SidebarProps {
  width?: string;
  display?: object;
  borderRight?: string;
  children?: React.ReactNode;
}

export interface SidebarItemProps {
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
