import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NavBar} from "./components/NavBar4";
import {Footer} from './components/Footer';
import {GlobalStyle} from "./styles/global";
import {Home} from "./pages/Home";


export default function App() {
    return (
        <Router>
            <GlobalStyle/>
            <NavBar/>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
