class WatchedStock < ApplicationRecord
  validates :watcher_id, :company_id, presence: true
  validates :watcher_id, uniqueness: { scope: :company_id }

  belongs_to :watcher, class_name: :User, foreign_key: :watcher_id
  belongs_to :company

end
