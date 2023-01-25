import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    const healthBar = document.getElementsByClassName('arena__health-bar');
    const healthBars = [...healthBar];
    const healthStatusView = document.getElementsByClassName('arena__health-indicator');
    const healthIndicator = [...healthStatusView];
    const statusHealth = {
      block: false,
      currentHealth: 100,
      timeOfCrit: Date.now(),
      critInput: []
    };
    const playerOne = {
      ...firstFighter,
      ...statusHealth,
      healthContainer: healthBars[0],
      healthInfo: healthIndicator[0],
      position: 'left'
    };
    const playerTwo = {
      ...firstFighter,
      ...statusHealth,
      healthContainer: healthBars[0],
      healthInfo: healthIndicator[0],
      position: 'right'
    };
  });
}

export function getDamage(attacker, defender) {
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  const criticalHit = fighter.critInput === 3 ? 2 : Math.random() + 1;
  return fighter.attack * criticalHit;
}

export function getBlockPower(fighter) {
  const blockShock = Math.random() + 1;
  return fighter.defense * blockShock;
}
