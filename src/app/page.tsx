'use client';

import { useState } from "react";
import Board from "./board";
import { isWinning, generateBoard } from "./utils/board.util";
import { Button } from "./button";

export type BoardType = string[][];

const BOARD_SIZE = 3;
const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

export default function Home() {
  const [board, setBoard] = useState<BoardType>(generateBoard(BOARD_SIZE));
  const [currentPlayer, setCurrentPlayer] = useState<string>(PLAYER_1);
  const [win, setWin] = useState(false);

  const handleMove = (row: number, col: number): void => {
    if (win || board[row][col]) return;

    const newBoard = board.map(innerArray => innerArray.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (isWinning(newBoard)) setWin(true);
    else setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  }

  const resetBoard = (): void => {
    setBoard(generateBoard(3));
    setWin(false);
  }
  
  return (
    <div className='flex flex-col items-center justify-center bg-black text-white p-20'>
      <div className='self-end'>
        <Button label='Reset Board' onClick={resetBoard} />
      </div>
      <Board board={board} handleMove={handleMove} />
      {win && (
        <div className="flex flex-col items-center "> 
          <h2 className='text-6xl m-8'>{currentPlayer} Wins!</h2>
          <Button label='Restart' onClick={resetBoard} />
        </div>
      )}
    </div>
  )
}