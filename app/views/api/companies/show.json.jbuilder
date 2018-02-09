json.extract! @company, :id, :name, :ticker
if current_user
  json.watched? current_user.watched?(@company.id)
  json.watch_id @watch ? @watch.id : json.null
end
json.current_user
