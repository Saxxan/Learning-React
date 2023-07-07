// Constants
import { WINNER_COMBOS } from "../constants";

/**
 * Función para comprobar si hay ganador
 * @param {*} boardToCheck
 * @returns
 */
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
