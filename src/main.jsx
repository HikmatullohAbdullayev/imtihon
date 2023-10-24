import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {  ThemeProvider } from "@mui/material/styles";
import  {theme} from './config/mui-theme'
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
