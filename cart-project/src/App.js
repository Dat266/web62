import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
