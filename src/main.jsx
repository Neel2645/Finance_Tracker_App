import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>
);
