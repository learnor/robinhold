import React, { Component } from 'react';

class NewsIndexItem extends Component {

  render() {
    const { news } = this.props;
    if (!news.urlToImage || !news.description) {
      return null;
    }
    const date = new Date(news.publishedAt).toDateString();
    return (
      <li className="news-index-item">
        <a href={news.url} target="_blank">
          <img src={news.urlToImage} className="news-thumbnail" />
        </a>
        <div className="item-content">
          <div className="title">
            {news.title}
          </div>
          <div className="body">
            {(news.description.length < 260) ? news.description : news.description.substring(0, 257) + "..." }
          </div>
          <div className="publish-date">
            {date}
          </div>
        </div>
      </li>
    );
  }
}

export default NewsIndexItem;
