class CreateJoinTableWarriorsWeapons < ActiveRecord::Migration[6.1]
  def change
    create_join_table :warriors, :weapons do |t|
      # t.index [:warrior_id, :weapon_id]
      # t.index [:weapon_id, :warrior_id]
    end
  end
end
