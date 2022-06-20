import React from 'react';
import {GlobalStyle} from "./styles/global";
import styled from "styled-components";
import {NavBar} from "./components/NavBar";
import {Navbar2} from "./components/NavBar2";
import {Home} from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Portfolio} from "./pages/Portfolio";
import {About} from "./pages/About";
import {NoMatch} from "./pages/NoMatch";
import {Resume} from "./pages/Resume";
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;


const App: React.FC = () => {
    return (
        <AppContainer>
            <GlobalStyle/>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'portfolio'} element={<Portfolio/>}/>
                    <Route path={'resume'} element={<Resume/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </Router>
        </AppContainer>
    )
}

export default App;
