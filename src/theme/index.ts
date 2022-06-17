import { globalCss } from "stitches.config";

export const globalStyles = globalCss({
  "html, body": {
    // Body:
    padding: 0,
    margin: 0,
    // Fonts:
    fontFamily: "Inter-Regular, sans-serif",
    fontSize: "14px",
    // Background-color:
    backgroundColor: "$gray12",
    // Color:
    color: "$gray1",
  },
  "*": {
    boxSizing: "border-box",
  },
});
