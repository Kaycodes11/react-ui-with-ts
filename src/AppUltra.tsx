import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Footer} from './components/Footer';
import {GlobalStyle} from "./styles/global";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Products} from "./pages/Products";
import {SignUp} from "./pages/SignUp";
import {Accordion} from "./components/Accordion";
import {ImageSlider} from "./components/Carousel";
import "./App.css"

// move to separate component
const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return null;
};


export default function App() {
    return (
        <Router>
            <GlobalStyle/>
            <ScrollToTop />
            <NavBar/>
            {/*<Accordion/>*/}
            <ImageSlider />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'services'} element={<Services/>}/>
                <Route path={'products'} element={<Products/>}/>
                <Route path={'sign-up'} element={<SignUp/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
