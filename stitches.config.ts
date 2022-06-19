import { createStitches } from "@stitches/react";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: "$gray1",
      text: "$gray13",
      border: "$gray5",
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
    fonts: {
      sans: "Inter-Regular",
    },
  },
});

// Dark mode:
export const darkTheme = createTheme({
  colors: {
    background: "$grayDark1",
    text: "$grayDark2",
    border: "$grayDark12",
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});
