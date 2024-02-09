class CreateAlbums < ActiveRecord::Migration[7.1]
  def change
    create_table :albums do |t|
      t.string :album_id
      t.string :user_id
      t.string :albumTitle

      t.timestamps
    end
  end
end
