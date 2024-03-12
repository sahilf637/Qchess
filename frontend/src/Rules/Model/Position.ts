export class Position {
    x: number | undefined;
    y: number | undefined;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    SamePosition(otherPosition: Position){
        if(otherPosition.x === this.x && otherPosition.y === this.y)
        return true;

        return false;
    }
}