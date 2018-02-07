@news.each do |news|
  json.set! news.id do
    json.partial! 'api/news/news', news: news
  end
end
