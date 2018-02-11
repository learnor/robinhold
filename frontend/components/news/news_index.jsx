import React, { Component } from 'react';
import NewsIndexItem from './news_index_item';

class NewsIndex extends Component {

  componentWillMount() {
    this.props.getAPINews('business', 'stock');
  }

  render () {
    
    const { news } = this.props;
    return (
      <ul className="news-index">
        {
          news.map((eachNews, i) =>
          (
            <NewsIndexItem news={eachNews} key={i} />
          ))
        }
      </ul>
    );
  }
}

export default NewsIndex;
