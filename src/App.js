import React from 'react';
import { Navbar, Products, CTA } from './components';
import { Footer, Blog, Possibility, Features, GPT3, Header } from "./containers";
import './App.css';



function App() {
  return (
    <div className="App">
        <div className="top">
            <Navbar />            
            <Header />
        </div>
        <div className="bottom">
            <Products />
            <GPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    </div>
  );
}

export default App;
