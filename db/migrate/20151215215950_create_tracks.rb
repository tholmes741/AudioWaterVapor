class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :description
      t.string :track_url, null: false
      t.string :image, null: false
      t.integer :play_count, default: 0
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index(:tracks, :user_id)
  end
end
