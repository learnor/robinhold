import * as WSAPIUtil from '../util/watched_stocks_api_util';

export const RECEIVE_WATCHED_STOCK = 'RECEIVE_WATCHED_STOCK';
export const RECEIVE_WATCHED_STOCKS = 'RECEIVE_WATCHED_STOCKS';
export const RECEIVE_WATCHED_STOCK_ERRORS = 'RECEIVE_WATCHED_STOCK_ERRORS';

export const receiveWatchedStock = watchedStock => ({
  type: RECEIVE_WATCHED_STOCK,
  watchedStock,
});

export const receiveWatchedStocks = watchedStocks => ({
  type: RECEIVE_WATCHED_STOCKS,
  watchedStocks,
});

export const receiveWatchedStockErrors = errors => ({
  type: RECEIVE_WATCHED_STOCK_ERRORS,
  errors: errors.responseJSON,
});

export const addWatchedStock = companyId => dispatch =>
WSAPIUtil.postWatchedStock(companyId)
.then(
  watchedStock => dispatch(receiveWatchedStock(watchedStock)),
  err => dispatch(receiveWatchedStockErrors(err))
);

export const removeWatchedStock = id => dispatch =>
WSAPIUtil.deleteWatchedStock(id)
.then(
  removedWatchedStock => dispatch(receiveWatchedStock(removedWatchedStock)),
  err => dispatch(receiveWatchedStockErrors(err))
);

export const fetchWatchedStocks = () => dispatch =>
WSAPIUtil.getWatchedStocks()
.then(
  watchedStocks => dispatch(receiveWatchedStocks(watchedStocks)),
  err => dispatch(receiveWatchedStockErrors(err))
);
