class News < ApplicationRecord
  validates :title, :body, :publish_date, :img_url, presence: true
end
