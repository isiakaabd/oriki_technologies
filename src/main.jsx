import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes/AppRoutes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <AppRoutes />
  </React.StrictMode>
);
