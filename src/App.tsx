import React from 'react';
import logo from './logo.svg';
import {Header} from "./components/header/Header";
import {MainThing} from "./components/main/MainThing";
import {HowWeWork} from "./components/howWeWork/HowWeWork";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainThing/>
            <HowWeWork/>
            <Footer/>
        </div>
    );
}

export default App;
