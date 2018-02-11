import React, { Component } from 'react';

class NewsIndexItem extends Component {

  render() {
    const { news } = this.props;
    if (!news.urlToImage) {
      return null;
    }
    return (
      <li className="news-index-item">
        <a href="{news.url}">
          <img src={news.urlToImage} className="news-thumbnail" />
        </a>
        <div className="item-content">
          <div className="title">
            {news.title}
          </div>
          <div className="body">
            {news.description}
          </div>
          <div className="publish-date">
            {news.publishedAt}
          </div>
        </div>
      </li>
    );
  }
}

export default NewsIndexItem;
