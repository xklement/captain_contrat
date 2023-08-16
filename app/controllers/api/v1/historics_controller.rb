class Api::V1::HistoricsController < Api::V1::BaseController
  def index
    historics = Historic.all.order(created_at: :desc)

    render json: historic_with_warrior_details(historics)
  end

  def show
    historic = Historic.find(params[:id])
    render json: historic
  end

  private

  def historic_with_warrior_details(historics)
    historics.map do |historic|
      {
        id: historic.id,
        winner: historic.winner,
        warrior1: historic.warrior1,
        warrior2: historic.warrior2,
      }
    end
  end
end
