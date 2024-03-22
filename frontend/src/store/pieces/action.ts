import pieces from "../../Rules/Types/initPiece";
import { findPossibleMovesPawn } from "../../Rules/Moves/Pawn";
import { newBoard } from "./Board_Reducer";
import { Player, piecesType } from "../../Rules/Types/Type";

export const setPieces = (dispatch: any, Payload: any) => {
    dispatch({ type: 'SET_PIECES' });

    const value = Payload.state.pieces;

    for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            let element = value[key];

            const tile = document.getElementById(element.id)
            const image = document.createElement('img')
            image.src = element.img
            image.className = 'm-auto'

            tile?.appendChild(image)
        }
    }

    return
}

export const findMoves = (dispatch: any, Payload: any) => {
    let pieces = { ...Payload.boardState.pieces }; // Make a shallow copy of the pieces object
    let id = Payload.id;
    let places = Payload.boardState.places;

    if (pieces[places[id].type].type === piecesType.pawn) {
        const updatedPiece = { ...pieces[places[id].type] }; // Make a shallow copy of the piece to avoid mutation

        updatedPiece.possible_moves = findPossibleMovesPawn(updatedPiece, places, Payload.boardState.turn);
        // Update the copy of the piece in the pieces object
        pieces[places[id].type] = updatedPiece;
    }

    dispatch({
        type: 'SET_POSSIBLE_MOVES',
        Payload: { ...Payload.boardState, pieces } // Update the pieces in the payload
    });
};

export const movePiece = (dispatch: any, Payload: any) => {
    let boardState = Payload.boardState;
    let moveTo = Payload.moveTo;
    let moveFrom = Payload.moveFrom;


    let newPlace = { ...boardState.places }
    let newPieces = { ...boardState.pieces }
    let type = boardState.places[moveFrom].type;
    let possible = boardState.pieces[type].possible_moves

    if (possible.includes(moveTo)) {
        const element1 = document.getElementById(moveFrom)
        let img = new DOMParser().parseFromString(element1?.innerHTML as string, 'text/html')
        const element2 = document.getElementById(moveTo)

        if (boardState.places[moveTo].has) {
            
            element2?.removeChild(element2?.firstChild as Node)

            delete newPieces[newPlace[moveTo].type]
        }

        element1?.removeChild(element1?.firstChild as Node)
        element2?.appendChild(img.body.firstChild as Node)

        newPlace[moveTo] = {
            has: true,
            type: newPlace[moveFrom].type
        }
        newPlace[moveFrom] = {
            has: false,
            type: "none"
        }

        newPieces[newPlace[moveTo].type] = {
            ...newPieces[newPlace[moveTo].type],
            possible_moves: [],
            id: moveTo,
            hasFirstMove: false
        }

        dispatch({
            type: "MOVE_PIECE", Payload: {
                places: newPlace,
                pieces: newPieces,
                turn: (boardState.turn === Player.Black) ? Player.White : Player.Black
            }
        })
    } else {
        return;
    }
}

