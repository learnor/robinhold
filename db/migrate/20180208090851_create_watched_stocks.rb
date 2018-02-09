class CreateWatchedStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :watched_stocks do |t|
      t.integer :watcher_id, null: false
      t.integer :company_id, null: false

      t.timestamps
    end
    add_index :watched_stocks, :watcher_id
    add_index :watched_stocks, :company_id
    add_index :watched_stocks, [:watcher_id, :company_id], unique: true
  end
end
