class Api::V1::WarriorsController < Api::V1::BaseController
    before_action :set_warrior, only: [:show, :update, :destroy]

  def index
    @warriors = Warrior.all
    puts "asd"
    render json: @warriors
  end

  def show
    render json: @warrior
  end

  def create
    @warrior = Warrior.new(warrior_params)

    if @warrior.save
      render json: @warrior, status: :created
    else
      render json: @warrior.errors, status: :unprocessable_entity
    end
  end

  def update
    if @warrior.update(warrior_params)
      render json: @warrior
    else
      render json: @warrior.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @warrior.destroy
    head :no_content
  end

  private

  def set_warrior
    @warrior = Warrior.find(params[:id])
  end

  def warrior_params
    params.require(:warrior).permit(:name, :hp, :attack)
  end
end
