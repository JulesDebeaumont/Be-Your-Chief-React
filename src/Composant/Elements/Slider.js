import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import '../../css/slider.css';
import React from 'react';

export function Slider()
{
    const history=useHistory();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
<>
    
    <div className="slide">
    <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Spices</h3>
          <p>Use The Best Combination of Spices</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Delicious and Simple</h3>
          <p>Cook Fast And Enjoy Your Time With Love ones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>For All the regimes</h3>
          <p>We have recipes for all the regimes like vegeterians</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</>
    );
}
export default Slider;