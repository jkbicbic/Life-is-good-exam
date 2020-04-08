import React from 'react';
import './article-list.scss';
import { Link } from 'react-router-dom'
import Article from './article/article'

class ArticleList extends React.Component {
  constructor(props){
    super(props);
    this.state ={articles: ['art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art']}
  }

  render() {
    var article = this.state.articles;
    return(
      <div className="article-list">
        {article.map(function(art, index){
          return <Article defaultValue={art} key={index} />
        })}
        <Link to={'/other'} className="article-list__button-more">More<span className="article-list__button-icon"></span></Link>
      </div>
    )
  }
}

export default ArticleList;
