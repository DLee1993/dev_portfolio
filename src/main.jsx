import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactLenis from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ReactLenis root options={{ duration: 1.5 }}>
            <App />
        </ReactLenis>
    </React.StrictMode>
);
