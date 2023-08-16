class Api::V1::CombatController < Api::V1::BaseController
  def combat
    warrior1 = Warrior.find(combat_params[:warrior1_id])
    warrior2 = Warrior.find(combat_params[:warrior2_id])
    combat = CombatService.new()

    result = combat.simulate_combat(warrior1, warrior2)

    render json: result
  end

  private

  def combat_params
    params.require(:combat).permit(:warrior1_id, :warrior2_id)
  end
end
