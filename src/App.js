import React from 'react';
import './App.css';
import './Components/fonts/Fonts.css'
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu/Menu";
import {BrowserRouter} from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Footer from "./Components/Footer/Footer";
import Resons from "./Components/Resons/Resons";
import Pizza from "./Components/Pizza/Pizza";
import Form from "./Components/Form/Form";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
      <BrowserRouter>
        <main>
          <Header />
          <Menu />
          <Slider />
          <Pizza />
          <Resons />
          <Reviews />
          <Form />
          <AboutCompany />
          <Footer />
        </main>
      </BrowserRouter>
  );
}


export default App;