import { Pawn } from "../Model/Pawn";
import { Player } from "../Types/Type"
export const findPossibleMovesPawn = (piece: Pawn, places: {[key:string]: any}, turn: Player) => {   
    const moves: Array<string> = [];
    let direction: number;
    if(turn == Player.White){
        direction = 1;
    }else{
        direction = -1;
    }

    let id = piece.id;
    const x =  +id.split("")[0];
    const y = id.split("")[1];

    //find moves
    if(piece.hasFirstMove){
        let key = x;
        for (let index = 0; index < 2; index++) {
            key = key + direction;
            let newId = (key).toString() + y;
            if(!places[newId].has){
                moves.push(newId);
            }else{
                return;
            }
        }
    }else{
        let key = x + direction;
        let newId = key.toString() + y;

        if(!places[newId].has){
            moves.push(newId)
        }
    }
    
    return moves
}
