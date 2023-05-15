// Packages
import React from "react";
import ReactDOM from "react-dom/client";
// Components
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import App from "./App.jsx";
//  Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
