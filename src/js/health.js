export default function healthState(state) {
  if (state.health >= 50) {
    return 'healthy';
  } if (state.health >= 15 && state.health < 50) {
    return 'wounded';
  } if (state.health > 0 && state.health < 15) {
    return 'critical';
  }
  return 'Неверное значение!';
}
