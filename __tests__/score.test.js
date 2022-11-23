const BowlingGame = require('../bowlingGame.js')

describe('bowlingGame test suite', () => {
  let game

  beforeEach(() => {
    game = new BowlingGame()
  })

  const rollMany = (rolls, n) => {
    for (let i = 0; i < rolls; i++) {
      game.roll(n)
    }
  }

  const rollSpare = () => {
    game.roll(5)
    game.roll(5)
  }

  const rollStrike = () => {
    game.roll(10)
  }

  it('should return 0 for a game of all zeros', () => {
    rollMany(20, 0)
    expect(game.score).toBe(0)
  })

  it('should return 20 for game of all ones', () => {
    rollMany(20, 1)
    expect(game.score).toBe(20)
  })

  it('handles a spare with correct bonus', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    expect(game.score).toBe(16)
  })

  it('handles a strike with correct bonus', () => {
    rollStrike()
    game.roll(1)
    game.roll(1)
    rollMany(17, 0)
    expect(game.score).toBe(14)
  })

  it('should return 300 for a perfect game of all strikes', () => {
    rollMany(12, 10)
    expect(game.score).toBe(300)
  })
})
