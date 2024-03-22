import pieces from "../../Rules/Types/initPiece";
import { findPossibleMovesPawn } from "../../Rules/Moves/Pawn";
import { newBoard } from "./Board_Reducer";
import { piecesType } from "../../Rules/Types/Type";

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

