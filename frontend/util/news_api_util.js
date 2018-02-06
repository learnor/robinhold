export const fetchAllNews = () => (
  $.ajax({
    url: '/api/news',
    method: 'GET',
  })
);

export const fetchNews = id => (
  $.ajax({
    url: `/api/news/${id}`,
    method: 'GET',
  })
);
