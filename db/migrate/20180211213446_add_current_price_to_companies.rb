class AddCurrentPriceToCompanies < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :current_price, :float
  end
end
