class CreateHistorics < ActiveRecord::Migration[6.1]
  def change
    create_table :historics do |t|
      t.integer :warrior1_id
      t.integer :warrior2_id
      t.integer :winner_id

      t.timestamps
    end
  end
end
