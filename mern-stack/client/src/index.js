import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ContactContext from "./contexts/ContactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <ContactContext>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ContactContext>
    </Router>
);
