import React from 'react';
import './aside.scss';
import Recommended from './img/recommended.png';
import AsideArticle from './aside-article/aside-article';

class Aside extends React.Component {
  constructor(props){
    super(props);
    this.state ={articles: ['art', 'art', 'art']}
  }

  render(){
    var article = this.state.articles;
    return(
      <div className="aside">
        <div className="aside__banner-top">Dummy Banner</div>
        <img className="aside__recommended" src={Recommended} alt="recommended header" />

        {article.map(function(art, index){
          return <AsideArticle defaultValue={art} key={index}/>
        })}

        <div className="aside__banner-small banner--first">Dummy banner</div>
        <div className="aside__banner-small">Dummy banner</div>
        <div className="aside__banner-small">Dummy banner</div>

      </div>
    )
  }
}

export default Aside;
