import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#fafafa",
      dark: "#f5f5f5",
    },
    color: {
      light: "#1a202c",
      dark: "#e2e8f0",
    }
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-Medium, sans-serif",
  },
  styles: {
    global: (props: ChakraProps) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        backgroundColor: mode("bg.light", "bg.dark")(props),
        color: mode("color.light", "color.dark")(props),
      },
    }),
  },
});

export default Theme;
