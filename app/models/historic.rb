class Historic < ApplicationRecord
  belongs_to :warrior1, class_name: 'Warrior', foreign_key: 'warrior1_id'
  belongs_to :warrior2, class_name: 'Warrior', foreign_key: 'warrior2_id'
  belongs_to :winner, class_name: 'Warrior', foreign_key: 'winner_id'
end
