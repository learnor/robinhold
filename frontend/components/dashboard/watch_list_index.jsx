import React from 'react';
import WatchListItem from './watch_list_item';

class WatchListIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // console.warn("watch list index is mounted");
    this.props.getUserInfo();
  }
  render () {
    const { companies } = this.props;
    return (
      <div className="watch-list">
        <h3 className="stock-list-header">
          Watchlist
        </h3>
        <ul className="stock-list">
          {companies.map(
            company => <WatchListItem company={company} key={company.id} />
          )}
        </ul>
      </div>
    );
  }
}

export default WatchListIndex;
