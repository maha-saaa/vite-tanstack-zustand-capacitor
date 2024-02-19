import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
