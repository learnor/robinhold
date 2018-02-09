class AddSrcUrlToNews < ActiveRecord::Migration[5.1]
  def change
    add_column :news, :src_url, :string
  end
end
