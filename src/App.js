import './App.css';
import 'react-refresh/runtime';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopPartOfPage from "./components/topPartOfPage/TopPartOfPage";
import BottomPart from "./components/bottomPartOfPage/BottomPart";
import HeroCarousel from './components/heroCarousel/HeroCarousel';

import LandingPage from './pages/LandingPage/LandingPage';
import AllCoursesPage from './pages/AllCoursesPage/AllCoursesPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import NotFound from './pages/NotFoundPage/NotFound';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    return (
        <div className="App">
            <Router>
                <TopPartOfPage />

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/courses/:category" element={<AllCoursesPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <BottomPart />
            </Router>
        </div>
    );
}

export default App;