import { styled } from "stitches.config";
import { useTheme } from "next-themes";

const Button = styled("button", {});

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const handleColorChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <Button onClick={handleColorChange}>{theme === "dark" ? "dark" : "light"} Theme</Button>
    </div>
  );
};

export default ChangeTheme;
