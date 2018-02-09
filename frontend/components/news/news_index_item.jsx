import React, { Component } from 'react';

class NewsIndexItem extends Component {
  
  render() {
    const { news } = this.props;
    return (
      <li className="news-index-item">
        <a href="#">
          <img src={`${news.img_url}`} />
        </a>
        <div className="item-content">
          <div className="title">
            {news.title}
          </div>
          <div className="body">
            {news.body}
          </div>
          <div className="publish-date">
            {news.publish_date}
          </div>
        </div>
      </li>
    );
  }
}

export default NewsIndexItem;
