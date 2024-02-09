class CreatePhotos < ActiveRecord::Migration[7.1]
  def change
    create_table :photos do |t|
      t.string :album_id
      t.string :photoTitle
      t.string :imageUrl

      t.timestamps
    end
  end
end
