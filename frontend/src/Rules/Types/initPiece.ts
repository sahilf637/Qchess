import { images } from "./Images"
import { Position } from "../Model/Position";
import { Piece } from "../Model/Piece";
import { piecesType, Player } from "./Type";
import { Pawn } from "../Model/Pawn";

interface initial_pieces {
    [key: string]: string
}

export const initial_pieces: initial_pieces = {
    'wa_pawn': '2a',
    'wb_pawn': '2b',
    'wc_pawn': '2c',
    'wd_pawn': '2d',
    'we_pawn': '2e',
    'wf_pawn': '2f',
    'wg_pawn': '2g',
    'wh_pawn': '2h',
    'wa_rook': '1a',
    'wh_rook': '1h',
    'wb_knight': '1b',
    'wg_knight': '1g',
    'wc_bishop': '1c',
    'wf_bishop': '1f',
    'wd_queen': '1d',
    'we_king': '1e',

    'ba_pawn': '7a',
    'bb_pawn': '7b',
    'bc_pawn': '7c',
    'bd_pawn': '7d',
    'be_pawn': '7e',
    'bf_pawn': '7f',
    'bg_pawn': '7g',
    'bh_pawn': '7h',
    'ba_rook': '8a',
    'bh_rook': '8h',
    'bb_knight': '8b',
    'bg_knight': '8g',
    'bc_bishop': '8c',
    'bf_bishop': '8f',
    'bd_queen': '8d',
    'be_king': '8e',
}

const findType = (p: string) => {
    switch (p) {
        case 'pawn':
            return piecesType.pawn;
        case 'rook':
            return piecesType.rook;
        case 'knight':
            return piecesType.knight;
        case 'bishop':
            return piecesType.bishop;
        case 'queen':
            return piecesType.queen;
        case 'king':
            return piecesType.king
    }
}

let pieces: { [key: string]: Piece } = {};

for (const key in initial_pieces) {
    if (Object.prototype.hasOwnProperty.call(initial_pieces, key)) {
        let id = initial_pieces[key];
        
        const element = document.getElementById(id)
        let pos = element?.getBoundingClientRect()
        console.log(pos);

        let x = pos?.left as number
        let y = pos?.top as number
        let position = new Position(x, y);

        let type = findType(key.slice(3)) as piecesType
        let img = images[key]
        let team = (key.startsWith('w')) ? Player.White : Player.Black

        let newPiece;

        if(type === piecesType.pawn){
            newPiece = new Pawn(type, id, img, position, team)
        }
        else{
            newPiece = new Piece(type, id, img, position, team);
        }

        pieces[key] = newPiece
    }
}


export default pieces