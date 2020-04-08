import React from 'react';
import './body.scss';
import ArticleList from './article-list/article-list';
import Aside from './aside/aside';

const Body = () => {

  let articles : Array<string> = ['art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art']

  return(
    <div className="body">
      <div className="body__content">
        <ArticleList articleList={articles} />
        <Aside articleList={articles} />
      </div>
    </div>
  )
}

export default Body;
