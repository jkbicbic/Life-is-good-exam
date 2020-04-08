import React from 'react';
import './aside-article.scss';
import { Link } from 'react-router-dom'
import thumb from './img/thumb.png';
import thumbClicked from './img/thumb-clicked.png';

type Props = {
  defaultValue: string;
}

type States = {
  image: string;
}

class AsideArticle extends React.Component<Props, States>{

  constructor(props: Props){
    super(props);
    this.state = {image: thumb};
  }

  onHover = () => {
    this.setState({image: thumbClicked});
  }

  onOut = () =>{
    this.setState({image: thumb});
  }

  render(){
    return(
      <Link to={'/other'}>
        <article className="aside__recommended-article"
                 onMouseOver={this.onHover}
                 onMouseOut={this.onOut}>

          <img className="aside__article-image"
               src={this.state.image}
               alt="thumb"/>

          <div className="aside__article-preview">
            <header className="aside__article-header">
              サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
            </header>
            <p className="aside__article-date">2016.01.01</p>
          </div>
        </article>
      </Link>
    )
  }
}

export default AsideArticle;
