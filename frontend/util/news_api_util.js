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

export const fetchAPINews = (cat, q) => (
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?category=${cat}&q=${q}&apiKey=f7712de146174b73a2ec758c30a77dff`,
    method: 'GET'
  })
);
