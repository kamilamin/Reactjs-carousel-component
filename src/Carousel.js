import React from "react";
import { Carousel } from "react-responsive-carousel";
import first from './Images/1.jpeg';
import second from './Images/2.jpeg';
import third from './Images/3.jpeg';
export default () => (
<div style={{marginLeft: '20%', marginRight: '20%', marginTop: '20%'}}>
    <Carousel infiniteLoop autoPlay>
        <div>
        <img src={first} />
        <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src={second} />
        <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src={third}/>
        <p className="legend">Legend 3</p>
        </div>
    </Carousel>
  </div>
);
