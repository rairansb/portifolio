import React from 'react';
import { Slide } from 'react-slideshow-image';
import Perfil from '../assets/images/perfil.jpg'
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: {Perfil},
    caption: 'Slide 1'
  },
  {
    url: {Perfil},
    caption: 'Slide 2'
  },
  {
    url: {Perfil},
    caption: 'Slide 3'
  },
];

export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}