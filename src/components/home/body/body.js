import React from 'react';
import './body.scss';
import ArticleList from './article-list/article-list';
import Aside from './aside/aside';

const Body = () => {
  return(
    <div className="body">
      <div className="body__content">
        <ArticleList />
        <Aside />
      </div>
    </div>
  )
}

export default Body;
