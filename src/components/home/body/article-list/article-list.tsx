import React from 'react';
import './article-list.scss';
import { Link } from 'react-router-dom'
import Article from './article/article'

type Props = {
  articleList: Array<string>;
}

const ArticleList = (props: Props) => {

    let articleList = props.articleList.map(function(item, index){
      return <Article defaultValue={item} key={index} />
    })

    return(
      <div className="article-list">
        {articleList}
        <Link to={'/other'}
              className="article-list__button-more">
          More
          <span className="article-list__button-icon"></span>
        </Link>
      </div>
    )
}

export default ArticleList;
