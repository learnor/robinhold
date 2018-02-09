import React, { Component } from 'react';
import NewsIndexItem from './news_index_item';

class NewsIndex extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {
    this.props.getAllNews();
  }

  render () {
    
    const { news } = this.props;
    return (
      <ul className="news-index">
        {
          news.map(eachNews =>
            <NewsIndexItem
              key={eachNews.id}
              news={eachNews}
            />
          )
        }
      </ul>
    );
  }
}

export default NewsIndex;
