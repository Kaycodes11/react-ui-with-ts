import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NavBar} from "./components/NavBar4";
import {Footer} from './components/Footer';
import {GlobalStyle} from "./styles/global";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Products} from "./pages/Products";
import {SignUp} from "./pages/SignUp";


export default function App() {
    return (
        <Router>
            <GlobalStyle/>
            <NavBar/>
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
