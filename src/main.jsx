import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

import "./index.css";
import ProductContextProvider from "./context/ProductContent.jsx";

import 'react-toastify/dist/ReactToastify.css'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
      <ToastContainer autoClose={500}/>
    </ProductContextProvider>
  </React.StrictMode>
);
