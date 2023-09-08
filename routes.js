import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu/Menu.js';
import Slider from './components/Promocao/Slider.js';
import Login from './pages/Login/App.js';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Menu />
                            <Slider />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
