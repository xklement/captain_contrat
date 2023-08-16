class Warrior < ApplicationRecord
  validates :name, presence: true
  validates :hp, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :attack, presence: true
  has_one_attached :image
  has_many :historics, foreign_key: 'winner_id'
  has_and_belongs_to_many :weapons

end
