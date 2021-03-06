class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :text, null: false
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
