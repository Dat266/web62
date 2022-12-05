import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Header from "./layouts/Header";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
