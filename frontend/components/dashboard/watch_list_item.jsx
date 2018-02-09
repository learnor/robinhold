import React from 'react';
import { Link } from 'react-router-dom';

const WatchListItem = ({company}) => (
  <Link to={`/companies/${company.id}`}>
    <li className="stock-list-item">
      <div className="stock-text">
        <h4 className="stock-ticker">
          {company.ticker}
        </h4>
      </div>
      <img className="stock-thumbnail" src="stock_thumbnails/red1" />
      <span className="stock-price">$200</span>
    </li>
  </Link>
);

export default WatchListItem;
