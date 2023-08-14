class CreateWarriors < ActiveRecord::Migration[6.1]
  def change
    create_table :warriors do |t|
      t.string :name
      t.integer :hp
      t.integer :attack

      t.timestamps
    end
  end
end
