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
        bgGradient: mode(
          "radial(circle at 1px 1px, circleBg.light 2px, bg.light 0)",
          "radial(circle at 1px 1px, circleBg.dark 2px, bg.dark 0)"
        )(props),
        backgroundSize: "40px 40px",
        fontSize: "14px",
      },
    }),
  },
});

export default Theme;
