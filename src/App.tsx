// Router config ->
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PWA config ->
import SW from "@/pwa";

// CSS Styles ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";
import theme from "./theme";

// React-Hot-Toast ->
import { Toaster } from "react-hot-toast";

// Pages ->
import { Cloud, Home, Login } from "@/pages";

// Layout ->
import Layout from "@/layout";

// Providers ->
import { TaskContextProvider } from "./context/TaskContext";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <TaskContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cloud" element={<Cloud />} />
            </Routes>
          </TaskContextProvider>
        </Layout>
      </BrowserRouter>
      <SW />
      <Toaster position="bottom-right" reverseOrder={false} />
    </ChakraProvider>
  );
};

export default App;
