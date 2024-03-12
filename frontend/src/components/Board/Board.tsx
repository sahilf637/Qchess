import React, { useEffect } from "react";
import { setPieces } from "../../store/pieces/action";
import { useReducer } from "react";
import { reducer, newBoard } from "../../store/pieces/Board_Reducer";


type Props = {};

const Board = (props: Props) => {
  const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const board: Array<React.ReactNode> = [];

  const onClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.currentTarget.id);
  }

  const oddClass = 'flex bg-red-800 border text-black size-24';
  const evenClass = 'flex bg-green-800 border text-white size-24';
  let flag = false;

  verticalAxis.forEach((row) => {
    horizontalAxis.forEach((col) => {
      const id = row + col
      board.push(
        <span id={id} key= {id} className={(flag)?oddClass:evenClass} onClick={onClickHandler}>
        </span>
      );
      flag = !flag
    });
    flag = !flag
  })

  const [state, dispatch] = useReducer(reducer, newBoard)

  useEffect(() => {
    const Payload = {
      state
    }
    setPieces(dispatch, Payload)
  },[])

  return (
    <div className="flex p-10 pb-20 text-sm">
      <div className="grid grid-cols-8 mx-auto">{board}</div>
    </div>
  );
};

export default Board;
