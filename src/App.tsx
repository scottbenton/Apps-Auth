import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Auth from "./Auth";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: dev-tools</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwinds</div>
    <Auth />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
