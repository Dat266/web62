import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import CartState from "./context/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <CartState>
            <GlobalStyles>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </GlobalStyles>
        </CartState>
    </Router>
);
