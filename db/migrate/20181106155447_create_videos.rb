class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :type
      t.string :title
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end