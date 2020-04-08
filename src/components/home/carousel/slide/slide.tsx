import React from 'react';

type Props = {
  left: number;
  slides: Array<SlideAsset>;
}

type SlideAsset = {
  img: string;
  header: string;
  subheader: string;
}

const Slide = (props: Props) => {

  let location = props.left;
  let slides = props.slides;

  let slide = slides.map((slide, index) => {
    let bg = slide.img;
    return(
      <div className="carousel__slide" 
           style={{backgroundImage: `url(${bg})`}} 
           key={index}>
        <div className="carousel__slide-content">
          <h1 className="carousel__slide-header">{slide.header}</h1>
          <p className="carousel__slide-subheader">{slide.subheader}</p>
        </div>
      </div>
    )
  })

  return(
    <div className="carousel__slider" 
         style={{left: location+'px', width: (1400*slides.length)+'px'}}>
      {slide}
    </div>
  )
}

export default Slide