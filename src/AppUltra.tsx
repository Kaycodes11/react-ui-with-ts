import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NavBar} from "./components/NavBar4";
import {GlobalStyle} from "./styles/global";


export default function App() {
    return (
        <Router>
            <GlobalStyle />
            <NavBar />
            <Routes>
                {/*<Route path={'about'} element={<About/>}/>*/}
                {/*<Route path="*" element={<NoMatch/>}/>*/}
            </Routes>
        </Router>
    )
}
