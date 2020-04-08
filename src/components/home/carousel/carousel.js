import React from 'react';
import './carousel.scss';
import Slide from './slide/slide';
import Pager from './pager/pager';
import CoverPhoto1 from './img/cover-photo.jpg';
import CoverPhoto2 from './img/cover-photo-2.jpg';
import CoverPhoto3 from './img/cover-photo-3.jpg';

const coverPhotoWidth = 1400

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {location: 0}
    this.slides =  [
      {
        img: CoverPhoto1,
        header: 'キャッチコピーが入ります',
        subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
      },
      {
        img: CoverPhoto2,
        header: 'キャッチコピーが入ります',
        subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
      },
      {
        img: CoverPhoto3,
        header: 'キャッチコピーが入ります',
        subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
      }
    ]
    this.carouselWidth = (((coverPhotoWidth * this.slides.length) - coverPhotoWidth)) * -1;
    this.handleNavPagers = this.handleNavPagers.bind(this);
  }

  handleNav = (e) => {
    let l = this.state.location;
    let w = this.carouselWidth;
    if(e.target.value === "left"){
      l === 0 ? l = 0 : l = l + coverPhotoWidth;
    }
    else{
      l === w ? l = w : l = l - coverPhotoWidth;
    }
    this.setState({location: l});
    console.log(this.state.location);
  }

  handleNavPagers = (e) => {
    let l = (coverPhotoWidth * (e-1))*-1;
    this.setState({location: l});
  }

  render() {
    let width = this.carouselWidth;

    let leftButtonClass = 'carousel__button button--left'
    if (this.state.location === 0) {
      leftButtonClass = leftButtonClass + ' disabled'
    }

    let rightButtonClass = 'carousel__button button--right'
    if (this.state.location=== width) {
      rightButtonClass = rightButtonClass + ' disabled'
    }

    return(
      <div className="carousel">
        <Slide defaultValue={this.slides} left={this.state.location}/>
        <button className={leftButtonClass} onClick={this.handleNav} value="left"></button>
        <button className={rightButtonClass} onClick={this.handleNav} value="right"></button>
        <Pager onClick={this.handleNavPagers} carouselSlides={this.slides.length} left={this.state.location}/>
      </div>
    )
  }

}
export default Carousel