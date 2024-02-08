import { BoardType } from "../page";

export const generateBoard = (size: number): BoardType=> {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([...Array(size).fill('')]);
  }

  return board;
}

const checkHorizionalWin = (board: BoardType): boolean => {
  for (let row of board) {
    if (row.every(el => el && el === row[0])) {
      return true;
    }
  }

  return false;
}

const rowsToColumns = (board: BoardType): BoardType => {
  return board.map((_, i) => board.map(row => row[i]));
}

const diagonalWin = (board: BoardType): boolean => {
  const lToRDiag: string = board[0][0]
  const rToLDiag: string = board[0][board.length - 1]

  let lToRDiagWin: boolean = !!lToRDiag;
  let rToLDiagWin: boolean = !!rToLDiag;

  for (let i = 0; i < board.length; i++) {
    lToRDiagWin = lToRDiagWin && lToRDiag === board[i][i]
    rToLDiagWin = rToLDiagWin && rToLDiag === board[i][board.length - 1 - i]
  }

  return lToRDiagWin || rToLDiagWin;
}

export const isWinning = (board: BoardType): boolean => {
  return checkHorizionalWin(board) || 
    checkHorizionalWin(rowsToColumns(board)) || 
    diagonalWin(board)
}
