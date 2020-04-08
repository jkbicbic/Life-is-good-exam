import React from 'react';
import './aside.scss';
import Recommended from './img/recommended.png';
import AsideArticle from './aside-article/aside-article';

type Props = {
  articleList: Array<string>;
}

const Aside = (props: Props) => {

    let asideArticles: Array<string> = [];

    for (let i = 0; i < 3; i++) {
      asideArticles.push(props.articleList[i])
    }

    let articles = asideArticles.map(function(art, index){
      return <AsideArticle defaultValue={art} key={index}/>
    })

    return(
      <div className="aside">
        <div className="aside__banner-top">Dummy Banner</div>

        <img className="aside__recommended"
             src={Recommended}
             alt="recommended header"/>

        {articles}

        <div className="aside__banner-small banner--first">Dummy banner</div>
        <div className="aside__banner-small">Dummy banner</div>
        <div className="aside__banner-small">Dummy banner</div>
      </div>
    )
  }

export default Aside;
