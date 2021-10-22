import healthState from '../health';

describe('tests should determine charachters state of health', () => {
  test('should get result about critical state of life', () => {
    const result = healthState({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });

  test('should get result about wounded state of life', () => {
    const result = healthState({ name: 'Маг', health: 30 });
    expect(result).toBe('wounded');
  });

  test('should get result about healthy state of life', () => {
    const result = healthState({ name: 'Маг', health: 70 });
    expect(result).toBe('healthy');
  });

  test('should show invalid result ', () => {
    const result = healthState({ name: 'Маг', health: -4 });
    expect(result).toBe('Неверное значение!');
  });
});
