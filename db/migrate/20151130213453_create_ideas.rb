class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :body
      t.string :quality, default: 'swill'

      t.timestamps null: false
    end
  end
end
