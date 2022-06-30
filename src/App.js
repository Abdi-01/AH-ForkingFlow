import logo from './logo.svg';
import './App.css';
import React from "react";
import NavbarComponent from './Components/Navbar';
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingPage />
    </div>
  );
}

export default App;
