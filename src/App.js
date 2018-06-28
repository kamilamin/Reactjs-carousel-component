import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import "~slick-carousel/slick/slick.css"; 
// // import "~slick-carousel/slick/slick-theme.css";
// import SimpleSlider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
