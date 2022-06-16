// Sidebar ->
export interface SidebarProps {
  width?: string;
  display?: object;
  borderRight?: string;
  children?: React.ReactNode;
}

export interface SidebarItemProps {
  title: string;
  icon?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
