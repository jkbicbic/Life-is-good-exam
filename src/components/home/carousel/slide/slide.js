import React from 'react';

class Slide extends React.Component {
  render() {
    let location = this.props.left;
    let slides = this.props.defaultValue;
    let slide = slides.map((slide, index) => {
      let bg = slide.img;
      return(
        <div className="carousel__slide" style={{backgroundImage: `url(${bg})`}} key={index}>
          <div className="carousel__slide-content">
            <h1 className="carousel__slide-header">{slide.header}</h1>
            <p className="carousel__slide-subheader">{slide.subheader}</p>
          </div>
        </div>
      )
    })
    return(
      <div className="carousel__slider" style={{left: location+'px', width: (1400*slides.length)+'px'}}>
        {slide}
      </div>
    )
  }
}

export default Slide