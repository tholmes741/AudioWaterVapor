class AddCoverPhoto < ActiveRecord::Migration
  def change
    add_column(:users, :cover, :text, null: false)
  end
end
