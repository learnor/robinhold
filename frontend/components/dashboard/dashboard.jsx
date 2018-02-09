import React from 'react';

import NewsIndexContainer from '../news/news_index_container';

const Dashboard = () => (
  <div className="dashboard">
    <div className="main">
      <div className="history-chart">
      ===================
      history chart component
      ===================
      <img src= "asset_path 'history-chart.png'" />
      </div>
      <div className="news">
       ==============
       news component
       ==============
       <NewsIndexContainer />
      </div>
    </div>

    <div className="side">

      <div className="holding-stock-list">
        <h3 className="stock-list-header">
          Sotcks
        </h3>
        <ul className="stock-list">
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
        </ul>
      </div>
      <div className="watch-list">
        <h3 className="stock-list-header">
          Watchlist
        </h3>
        <ul className="stock-list">
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
          <li className="stock-list-item">
          <div className="stock-text">
            <h4 className="stock-ticker">
            APPL
            </h4>
            <span className="share-quantity">897 shares</span>
          </div>
          <img src="stock-thumbnail" className="stock-price" />
          <span className="stock-price">$200</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
