import { Pawn } from "../Model/Pawn";
import { Player } from "../Types/Type"
export const findPossibleMovesPawn = (piece: Pawn, places: {[key:string]: any}, turn: Player) => {   
    const moves: Array<string> = [];
    let direction: number;    
    let opposition = (turn == Player.Black)?Player.White:Player.Black;
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
    //capture moves
    let Ckey = x + direction;
    let leftpiece = String.fromCharCode(y.charCodeAt(0) - 1)
    let rightpiece = String.fromCharCode(y.charCodeAt(0) + 1)
    let leftkey = Ckey.toString() + leftpiece;
    let rightkey = Ckey.toString() + rightpiece;
    if(leftpiece >= "a" && places[leftkey].type.startsWith(opposition)){
        moves.push(leftkey)
    }
    if(rightpiece <= "h" && places[rightkey].type.startsWith(opposition)){
        moves.push(rightkey)
    }
    console.log(moves);
    
    return moves
}
