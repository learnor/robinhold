@watched_stocks.each do |ws|
  json.set! ws.id do
    json.extract! ws, :id, :company_id
  end
end
