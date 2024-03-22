import { Position } from "./Position";
import { piecesType, Player } from "../Types/Type";
import { initialState } from "../../store/auth/reducer";

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

    isPawn(){
        if(this.type === piecesType.pawn)
        return true;

        return false;
    }
    isKing(){
        if(this.type === piecesType.king)
        return true;

        return false;
    }
    isRook(){
        if(this.type === piecesType.rook)
        return true;

        return true;
    }
    isKnight(){
        if(this.type === piecesType.knight)
        return true;

        return true;
    }
    isBishop(){
        if(this.type === piecesType.bishop)
        return true;

        return false;
    }
    isQueen(){
        if(this.type === piecesType.queen)
        return true;

        return false;
    }

}