export function play(player1: string, player2: string): number {
  const rps: string[] = ["rock", "paper", "scissors"]
  player1 = player1.toLowerCase()
  player2 = player2.toLowerCase()

  if (!rps.includes(player1) || !rps.includes(player2)) {
    throw new Error("Invalid play")
  }

  switch (player1) {
    case ("rock"):
      switch (player2) {
        case ("rock"):
          return 0
        case ("paper"):
          return 2
        case ("scissors"):
          return 1
      }
      break
    case ("paper"):
      switch (player2) {
        case ("rock"):
          return 1
        case ("paper"):
          return 0
        case ("scissors"):
          return 2
      }
      break
    case ("scissors"):
      switch (player2) {
        case ("rock"):
          return 2
        case ("paper"):
          return 1
        case ("scissors"):
          return 0
      }
      break
  }
}
