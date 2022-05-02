import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { SkuPage } from "./pages/SkuPage";
import {HomePage} from "./pages/HomePage";
import {NavBar} from "./components/NavBar";
import {Manufacturer} from "./pages/Manufacturer";

function App() {

    return(
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path ="/" element = {<HomePage />}/>
                    <Route exact path ="sku/:sku" element = {<SkuPage />}/>
                    <Route path ="/:manufacturer" element = {<Manufacturer />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
