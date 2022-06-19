import { globalCss } from "stitches.config";

export const globalStyles = globalCss({
  "html, body": {
    // Body:
    padding: 0,
    margin: 0,
    // Fonts:
    fontFamily: "$sans",
    fontSize: "14px",
    // Background-color:
    backgroundColor: "$background",
    // Color:
    color: "$text",
  },
  "*": {
    boxSizing: "border-box",
  },
});
