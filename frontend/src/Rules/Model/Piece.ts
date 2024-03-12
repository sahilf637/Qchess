import { Position } from "./Position";
import { piecesType, Player } from "../Types/Type";

export class Piece {
    type: piecesType;
    id: string;
    img: string;
    team: Player;
    postion: Position;
    possible_moves?: Array<string>;

    constructor(type: piecesType, id: string, img: string, position: Position, team: Player){
        this.type = type;
        this.id = id;
        this.img = img;
        this.postion = position;
        this.team = team;
        this.possible_moves = []
    }
}