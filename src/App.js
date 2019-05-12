import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
