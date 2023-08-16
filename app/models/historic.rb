class Historic < ApplicationRecord
  belongs_to :warrior1, class_name: 'Warrior', foreign_key: 'warrior1_id'
  belongs_to :warrior2, class_name: 'Warrior', foreign_key: 'warrior2_id'
  belongs_to :winner, class_name: 'Warrior', foreign_key: 'winner_id'

  after_create :update_win_rates

  def update_win_rates
    warriors = [warrior1, warrior2, winner]
    warriors.each do |warrior|
      total_games = Historic.where('warrior1_id = ? OR warrior2_id = ?', warrior.id, warrior.id).count
      wins = warrior.historics.where(winner: warrior).count
      win_rate = total_games.zero? ? 0 : wins.to_f / total_games * 100
      warrior.update_columns(win_rate: win_rate.round(1))
    end
  end
end
