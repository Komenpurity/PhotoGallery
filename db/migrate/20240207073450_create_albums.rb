class CreateAlbums < ActiveRecord::Migration[7.1]
  def change
    create_table :albums do |t|
      t.string :albumId
      t.string :userId
      t.string :albumTitle

      t.timestamps
    end
  end
end
