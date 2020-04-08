import React from 'react';

type Props = {
  onClick: ((value: number) => void);
  carouselSlides: number;
  left: number;
}

class Pager extends React.Component<Props> {

  moveToSlide =(current: number)=> {
    this.props.onClick(current);
  }

  renderPagers = () => {
    let left = this.props.left;
    let pagers = [];

    for(var i = 0; i < this.props.carouselSlides; i++){

      let pagerClass = 'carousel__pager-button'
      if (left === (1400*(i))*-1) {
        pagerClass = pagerClass + ' active'
      }

      let current: number = i + 1;

      pagers.push(
        <button className={pagerClass} 
                onClick={() => this.moveToSlide(current)}
                key={i}>
        </button>
      )
    }

    return pagers;
  }

  render() {
    return(
      <div className="carousel__pagers" 
           style={{width: (16*((this.props.carouselSlides)*2))+'px'}}>
        {this.renderPagers()}
      </div>
    )
  }
}

export default Pager