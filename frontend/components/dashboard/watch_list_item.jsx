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
      <img src="stock-thumbnail" className="stock-price" />
      <span className="stock-price">$200</span>
    </li>
  </Link>
);

export default WatchListItem;
