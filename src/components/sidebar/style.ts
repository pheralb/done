import { styled } from "stitches.config";

export const SidebarStyle = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "220px",
  height: "100%",
  padding: "20px",
  overflowX: "hidden",
  overflowY: "auto",
  borderRight: "1px solid",
});
