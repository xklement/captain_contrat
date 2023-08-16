class Api::V1::WarriorsController < Api::V1::BaseController
    before_action :set_warrior, only: [:show, :update, :destroy]

  def index
    @warriors = Warrior.all
    render json: as_json(@warriors)
  end

  def show
    render json: as_json([@warrior])
  end

  def create
    @warrior = Warrior.new(warrior_params)

    if @warrior.save
      render json: as_json([@warrior]), status: :created
    else
      render json: @warrior.errors, status: :unprocessable_entity
    end
  end

  def update
    filtered_params = warrior_params.dup
    filtered_params.delete(:image) if warrior_params[:image] == 'null'
    if @warrior.update(filtered_params)
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
        image_url: warrior.image.attached? ? url_for(warrior.image) : nil
      }
    end
  end

  def set_warrior
    @warrior = Warrior.find(params[:id])
  end

  def warrior_params
    params.permit(:name, :hp, :attack, :image)
  end
end
