import { Piece } from "./Piece";
import { Player } from "../Types/Type";

export class Board {
    places: {[id: string]: boolean};
    pieces: {[Pname: string]: Piece};
    turn: Player;

    constructor(places: {[id: string]: boolean}, pieces: {[Pname: string]: Piece}, turn: Player){
        this.places = places;
        this.pieces = pieces;
        this.turn = turn;
    }
}