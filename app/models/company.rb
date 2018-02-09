class Company < ApplicationRecord
  validates :name, :ticker, presence: true

end
