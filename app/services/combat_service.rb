class CombatService

  def simulate_combat(warrior1, warrior2)
    combat_log = []

    while warrior1.hp > 0 && warrior2.hp > 0
      round = {
        warrior1.name.to_sym =>  {
          "hp": warrior1.hp,
          "attack": warrior1.attack
        },
        warrior2.name.to_sym => {
          "hp": warrior2.hp,
          "attack": warrior2.attack
        }
      }
      combat_log << round
      warrior2.hp -= warrior1.attack
      warrior1.hp -= warrior2.attack
    end

    last_round = {
      warrior1.name.to_sym => {
        "hp": warrior1.hp,
        "attack": warrior1.attack
      },
      warrior2.name.to_sym => {
        "hp": warrior2.hp,
        "attack": warrior2.attack
      }
    }
    combat_log << last_round
    winner = warrior1.hp > 0 ? warrior1 : warrior2

    result = {
      "winner": winner.name,
      "rounds": combat_log
    }
    historic = Historic.create(
      warrior1: warrior1,
      warrior2: warrior2,
      winner: winner
    )
    return result.to_json
  end

end