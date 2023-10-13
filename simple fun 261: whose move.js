// Simple Fun #261: Whose Move
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
// Return "white" if white is to move on the next round, and "black" otherwise.
// Example
// For lastPlayer = "black" and win = false, the output should be "white". For lastPlayer = "white" and win = true, the output should be "white".

// My solution
const whoseMove = (lastPlayer, win) => (lastPlayer == "white" && win == true) || (lastPlayer == "black" && win == false) ? "white" : "black"

// Best solution
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}
// Removes || operator since the ternary already has a built in "true" and "false." If win is true, return last player. If they lost, return opposite color.