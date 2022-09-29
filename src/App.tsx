import React from "react";
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </MantineProvider>
    </div>
  );
}


export default App;
