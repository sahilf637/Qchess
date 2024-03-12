import { Board } from "../../Rules/Model/Board"
import { initial_Tiles } from "../../Rules/Types/InitTiles"
import { Player } from "../../Rules/Types/Type"
import pieces from "../../Rules/Types/initPiece"


export const newBoard = new Board(initial_Tiles, pieces, Player.White)

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_PIECES':
            return {
                ...state
            }
        case 'MOVE_PIECE':
            return {
                ...state,
                
            }
    }
}