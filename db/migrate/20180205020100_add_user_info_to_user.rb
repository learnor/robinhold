class AddUserInfoToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :cash_value, :float, null: false
    add_index :users, :email, unique: true
  end
end
