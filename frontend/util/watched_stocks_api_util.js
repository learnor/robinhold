export const postWatchedStock = companyId => (
  $.ajax({
    method: 'POST',
    url: `api/companies/${companyId}/watched_stock`,
  })
);

export const getWatchedStocks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/watched_stocks',
  })
);

export const deleteWatchedStock = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/watched_stocks/${id}`,
  })
);
