class CreateNews < ActiveRecord::Migration[5.1]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.datetime :publish_date, null: false
      t.string :img_url, null: false

      t.timestamps
    end
  end
end
