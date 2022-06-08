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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider theme={Theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
      <SW />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default App;
