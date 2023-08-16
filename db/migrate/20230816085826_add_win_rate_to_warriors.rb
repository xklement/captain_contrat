class AddWinRateToWarriors < ActiveRecord::Migration[6.1]
  def change
    add_column :warriors, :win_rate, :float
  end
end
