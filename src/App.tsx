// Router config ->
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PWA config ->
import SW from "@/pwa";

// CSS Styles ->
import "@/styles/index.css";
import { darkTheme } from "stitches.config";
import { globalStyles } from "@/theme";

// React-Hot-Toast ->
import { Toaster } from "react-hot-toast";

// Pages ->
import { Home } from "@/pages";

// Layout ->
import Layout from "@/layout";

// Task Provider ->
import { TaskProvider } from "@/context/taskProvider";

// Theme Provider ->
import { ThemeProvider } from "next-themes";

const App = () => {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <BrowserRouter>
        <TaskProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </TaskProvider>
      </BrowserRouter>
      <SW />
      <Toaster position="bottom-right" reverseOrder={false} />
    </ThemeProvider>
  );
};

export default App;
