import { play } from "./rock-paper-scissors"

describe("Playing rock paper scissors", () => {
  test.each([
    ["rock","Paper",2],
    ["RocK","Scissors",1],
    ["scissors","PAper",1],
    ["Scissors","scissors",0],
    ["paPer","scissors",2],
    ["paper","ROCK",1]
  ])("play(%s, %s) == %d", (p1, p2, expected) => {
    expect(play(p1, p2)).toBe(expected)
  })
})