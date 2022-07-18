// Router config ->
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PWA config ->
import SW from "@/pwa";

// CSS Styles ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";

// React-Hot-Toast ->
import { Toaster } from "react-hot-toast";

// Pages ->
import { Home } from "@/pages";

// Layout ->
import Layout from "@/layout";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <SW />
      <Toaster position="bottom-right" reverseOrder={false} />
    </ChakraProvider>
  );
};

export default App;
