import { FC } from "react";
import { BoardType } from "./page";

interface BoardProps {
  board: BoardType;
  handleMove: (row: number, col: number) => void;
}

const Board: FC<BoardProps> = ({ board, handleMove }) => {
  return (
    <div>
      {board.map((row, rowIndex) => {
        const boarderRowClass = rowIndex === board.length - 1 ? '' : 'border-b-2 white'
        return (
          <div key={rowIndex} className="flex">
            {row.map((col, colIndex) => {
              const boarderColClass = colIndex === row.length - 1 ? '' : 'border-r-2 white'
              return (
                <div 
                  className={`flex p-2 h-20 w-20 justify-center items-center text-4xl ${boarderRowClass} ${boarderColClass} `} 
                  key={`${rowIndex}-${colIndex}`} 
                  onClick={() => handleMove(rowIndex, colIndex)}>
                    {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )

}

export default Board;