class Api::V1::WeaponsController < Api::V1::BaseController
  before_action :set_weapon, only: [:show, :update, :destroy]

  def index
    weapons = Weapon.all
    render json: weapons
  end

  def show
    render json: @weapon
  end

  def create
    weapon = Weapon.new(weapon_params)
    if weapon.save
      render json: weapon, status: :created
    else
      render json: { errors: weapon.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @weapon.update(weapon_params)
      render json: @weapon
    else
      render json: { errors: @weapon.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @weapon.destroy
    head :no_content
  end

  private

  def set_weapon
    @weapon = Weapon.find(params[:id])
  end

  def weapon_params
    params.require(:weapon).permit(:name, :attack, :hp)
  end
end
