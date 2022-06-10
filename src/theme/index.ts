import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import components from "./custom";

const Theme = extendTheme(
  {
    components,
  },
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    colors: {
      bg: {
        light: "#fafafa",
        dark: "#161617",
      },
      circleBg: {
        light: "#E7E7E7",
        dark: "#212121",
      },
      border: {
        light: "#fafafa",
        dark: "#222225",
      },
    },
    fonts: {
      body: "Inter-Regular, sans-serif",
      heading: "Inter-SemiBold, sans-serif",
    },
    styles: {
      global: (props: ChakraProps) => ({
        "html, body": {
          height: "100%",
          maxHeight: "100vh",
          background: mode("bg.light", "bg.dark")(props),
          fontSize: "14px",
        },
      }),
    },
  }
);

export default Theme;
