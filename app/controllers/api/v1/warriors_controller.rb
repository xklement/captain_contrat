class Api::V1::WarriorsController < Api::V1::BaseController
    before_action :set_warrior, only: [:show, :update, :destroy]
    before_action :filter_params, only: [:create, :update]

  def index
    @warriors = Warrior.all
    render json: as_json(@warriors)
  end

  def show
    render json: as_json([@warrior])
  end

  def create
    param_without_weapons = filter_params.dup
    param_without_weapons.delete(:weapons)

    @warrior = Warrior.new(param_without_weapons)

    if @warrior.save
      if filter_params[:weapons]
        weapon_ids = filter_params[:weapons].split(',').map(&:to_i)
        @warrior.weapon_ids = weapon_ids
      end
      update_warrior_stats
      render json: as_json([@warrior]), status: :created
    else
      render json: @warrior.errors, status: :unprocessable_entity
    end
  end

  def update
    if filter_params[:weapons]
      weapon_ids = filter_params[:weapons].split(',').map(&:to_i)
      @warrior.weapon_ids = weapon_ids
    end
    param_without_weapons = filter_params.dup
    param_without_weapons.delete(:weapons)
    if @warrior.update(param_without_weapons)
      update_warrior_stats
      render json: as_json([@warrior])
    else
      render json: @warrior.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @warrior.destroy
    head :no_content
  end

  private

  def as_json(warriors)
    warriors.map do |warrior|
      {
        id: warrior.id,
        name: warrior.name,
        attack: warrior.attack,
        hp: warrior.hp,
        image_url: warrior.image.attached? ? url_for(warrior.image) : nil,
        win_rate: warrior.win_rate.nil? ? 0 : warrior.win_rate,
        weapons: warrior.weapons
      }
    end
  end

  def set_warrior
    @warrior = Warrior.find(params[:id])
  end

  def warrior_params
    params.permit(:name, :hp, :attack, :image, :weapons)
  end

  def update_warrior_stats
    new_attack = @warrior.attack + @warrior.weapons.sum(:attack)
    new_hp = @warrior.hp + @warrior.weapons.sum(:hp)
    @warrior.update(attack: new_attack, hp: new_hp)
  end

  def filter_params
    filtered_params = warrior_params.dup
    filtered_params.delete(:image) if warrior_params[:image] == 'null'
    return filtered_params
  end
end
