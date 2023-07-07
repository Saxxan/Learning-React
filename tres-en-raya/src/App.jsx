// React
import { useState } from "react";

// Components
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";

// Constants
import { TURNS } from "./constants";

// Functions
import { checkWinner } from "./utils/board";

// Styles
import "./App.css";

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem("board");
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem("turn");
    return savedTurn ? JSON.parse(savedTurn) : TURNS.X;
  });
  // null no hay ganador, false es empate
  const [winner, setWinner] = useState(null);

  /**
   * Comprueba si no hay más celdas null en el tablero para declarar empate
   * @param {*} boardToCheck
   * @returns
   */
  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((cell) => cell !== null);
  };

  /**
   * Función para actualizar el tablero
   * @param {*} index
   * @returns
   */
  const updateBoard = (index) => {
    // No actualiza la celda si ya tiene algo o hay un ganador
    if (board[index] || winner) return;

    // Actualiza la celda clicada y le aporta el valor del turno
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el indicador del turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar en el local storage la partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));

    // Comprueba si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  /**
   * Función para reiniciar el juego
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
  };

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button className="btn-reset" onClick={resetGame}>
        Empezar de nuevo
      </button>
      <section className="game">
        {board.map((cell, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {cell}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
