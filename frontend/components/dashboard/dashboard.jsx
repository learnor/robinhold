import React from 'react';

import NewsIndexContainer from '../news/news_index_container';
import WatchListIndexContainer from './watch_list_index_container';

const Dashboard = () => (
  <div className="dashboard">
    <div className="main">
      <div className="history-chart">
        <img src="history-chart.png" />
      </div>
      <div className="news">

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
        <img className="stock-thumbnail" src="stock_thumbnails/green1.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green2.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green3.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green4.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green5.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green6.png" />
        <span className="stock-price">$200</span>
        </li><li className="stock-list-item">
        <div className="stock-text">
          <h4 className="stock-ticker">
          APPL
          </h4>
          <span className="share-quantity">897 shares</span>
        </div>
        <img className="stock-thumbnail" src="stock_thumbnails/green7.png" />
        <span className="stock-price">$200</span>
        </li>
        </ul>
      </div>
    <WatchListIndexContainer />
    </div>
  </div>
);

export default Dashboard;
