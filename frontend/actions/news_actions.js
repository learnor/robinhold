import {
  fetchNews,
  fetchAllNews,
  fetchAPINews,
} from '../util/news_api_util';

export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_API_NEWS = 'RECEIVE_API_NEWS';
export const RECEIVE_NEWS_ERRORS = 'RECEIVE_NEWS_ERRORS';

export const receiveAllNews = allNews => ({
  type: RECEIVE_ALL_NEWS,
  allNews
});

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const receiveNewsErrors = errors => ({
  type: RECEIVE_NEWS_ERRORS,
  errors: errors.responseJSON,
});

export const receiveAPINews = news => ({
  type: RECEIVE_API_NEWS,
  news: news.articles
});

export const getAllNews = () => dispatch => fetchAllNews()
.then(
  allNews => dispatch(receiveAllNews(allNews)),
  err => dispatch(receiveNewsErrors(err))
);

export const getNews = id => dispatch => fetchNews(id)
.then(
  news => dispatch(receiveNews(news)),
  err => dispatch(receiveNewsErrors(err))
);

export const getAPINews = (cat, q) => dispatch => fetchAPINews(cat, q)
.then(
  news => dispatch(receiveAPINews(news)),
  err => dispatch(receiveNewsErrors(err))
);
