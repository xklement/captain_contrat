class CreateWeapons < ActiveRecord::Migration[6.1]
  def change
    create_table :weapons do |t|
      t.string :name
      t.integer :attack
      t.integer :hp

      t.timestamps
    end
  end
end
