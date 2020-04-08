import React from 'react';

class Pager extends React.Component {

  constructor(props){
    super(props);
    this.data = this.props.carouselSlides;
  }

  moveToSlide =(e)=> {
    this.props.onClick(e.target.value);
  }

  renderPagers = () => {
    let left = this.props.left;
    let pagers = [];

    for(var i = 0; i < this.data; i++){
      let pagerClass = 'carousel__pager-button'
      if (left === (1400*(i))*-1) {
        pagerClass = pagerClass + ' active'
      }
      pagers.push(
        <button className={pagerClass} onClick={this.moveToSlide.bind(this)} value={i+1} key={i}></button>
      )
    }
    return pagers;
  }

  render() {
    return(
      <div className="carousel__pagers" style={{width: (16*((this.data)*2))+'px'}}>
        {this.renderPagers()}
      </div>
    )
  }
}

export default Pager