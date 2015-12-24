class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :follower, null: false
      t.integer :followee, null: false

      t.timestamps null: false
    end
    add_index(:follows, [:follower, :followee], unique: true)
  end
end
