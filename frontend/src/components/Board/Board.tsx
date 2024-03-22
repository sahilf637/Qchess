import React, { useEffect, useState } from "react";
import { setPieces , findMoves, movePiece} from "../../store/pieces/action";
import { useReducer } from "react";
import { reducer, newBoard } from "../../store/pieces/Board_Reducer";


type Props = {};

const Board = (props: Props) => {
  const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const [boardState, dispatch] = useReducer(reducer, newBoard)

  const [isSelected, setisSelected] = useState<string>("")

  const board: Array<React.ReactNode> = [];

  // const movePiece = (id: string) => {
  
  //   else{
  //     return;
  //   }
  // }

  const onClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    let id = e.currentTarget.id
    if(isSelected.length === 0 && boardState.places[id]){
      setisSelected(id)
      let Payload = {
        boardState: boardState,
        id: id,
      }
      findMoves(dispatch, Payload)
    }else{
      let Payload = {
        boardState,
        moveTo: id,
        moveFrom : isSelected
      }
      movePiece(dispatch, Payload);
      setisSelected("")
    }
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


  useEffect(() => {
    const Payload = {
      state: boardState
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
