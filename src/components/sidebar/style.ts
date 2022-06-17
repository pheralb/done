import { styled } from "stitches.config";

export const SidebarStyle = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "200px",
  height: "100%",
  backgroundColor: "$gray12",
  padding: "20px",
  overflowX: "hidden",
  overflowY: "auto",
  borderRight: "1px solid $grayDark1",
});
