import React from 'react';
import {config} from "./config";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {initializeApp} from "firebase/app";
import HomePage from "./pages/Login";
import Auth from "./features/Auth";
import LoginPage from "./pages/Login";
import './App.css';

// firebase init
try {
    initializeApp(config.firebaseConfig);
} catch (error) {
    console.error(error)
}


type Props = {}

const App: React.FC<Props> = (props) => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth><HomePage /></Auth>}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  );
};

export default App;
