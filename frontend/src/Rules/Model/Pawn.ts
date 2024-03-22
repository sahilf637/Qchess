import { Piece } from "./Piece";
import { piecesType, Player } from "../Types/Type";
import { Position } from "./Position";

export class Pawn extends Piece{
    hasFirstMove: boolean;

    constructor(type: piecesType, id: string, img: string, position: Position, team: Player){
        super(type, id, img, position, team)
        this.hasFirstMove = true;
    }
}