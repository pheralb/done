// Router config ->
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PWA config ->
import SW from "@/pwa";

// Chakra UI & Custom Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";
import Theme from "@/theme";

// React-Hot-Toast ->
import { Toaster } from "react-hot-toast";

// Pages ->
import { Home } from "@/pages";

// Layout ->
import Layout from "@/layout";

// Task Provider ->
import { TaskProvider } from "@/context/taskProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider theme={Theme}>
          <TaskProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          </TaskProvider>
        </ChakraProvider>
      </BrowserRouter>
      <SW />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
