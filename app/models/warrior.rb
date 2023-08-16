class Warrior < ApplicationRecord
  validates :name, presence: true
  validates :hp, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :attack, presence: true
  has_one_attached :image

end
