import React from 'react';
import './carousel.scss';
import Slide from './slide/slide';
import Pager from './pager/pager';
import CoverPhoto1 from './img/cover-photo.jpg';
import CoverPhoto2 from './img/cover-photo-2.jpg';
import CoverPhoto3 from './img/cover-photo-3.jpg';

const  coverPhotoWidth = 1400

type States = {
  location: number;
  slides: Array<SlideAsset>;
}

type SlideAsset = {
  img: string;
  header: string;
  subheader: string;
}

class Carousel extends React.Component<{}, States>{
  constructor(props: {}) {
    super(props);
    this.state = {
      location: 0,
      slides: [
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
      ],
    }
    this.handleNavPagers = this.handleNavPagers.bind(this);
  }


  handleNav = (btn: string, cw: number) => {
    let l = this.state.location;
    let w = cw;
    if(btn === "left"){
      l === 0 ? l = 0 : l = l + coverPhotoWidth;
    }
    else{
      l === w ? l = w : l = l - coverPhotoWidth;
    }
    this.setState({location: l});
  }

  handleNavPagers = (e: any) => {
    let l = (coverPhotoWidth * (e-1))*-1;
    this.setState({location: l});
  }

  render() {

    let width = (((coverPhotoWidth * this.state.slides.length) - coverPhotoWidth)) * -1;

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
        <Slide slides={this.state.slides}
               left={this.state.location}/>
        <button className={leftButtonClass}
                onClick={() => this.handleNav('left',width)} >
        </button>
        <button className={rightButtonClass}
                onClick={() =>this.handleNav('right',width)}>
        </button>
        <Pager onClick={this.handleNavPagers}
               carouselSlides={this.state.slides.length} 
               left={this.state.location}/>
      </div>
    )
  }
}
export default Carousel