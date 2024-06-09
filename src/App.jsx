import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SelfReflectionPage from "./pages/SelfReflectionPage/SelfReflectionPage";
import SelfExpressionPage from "./pages/SelfExpressionPage/SelfExpressionPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
    return (
        <main className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/self-reflection/emotions"
                        element={<SelfReflectionPage topic='Emotions' />}
                    />
                    <Route
                        path="/self-reflection/relationships"
                        element={<SelfReflectionPage topic='Relationships' />}
                    />
                    <Route
                        path="/self-expression"
                        element={<SelfExpressionPage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
