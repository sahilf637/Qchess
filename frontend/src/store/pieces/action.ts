import pieces from "../../Rules/Types/initPiece";

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

// export const changeP = (dispatch: any, Payload: any) => {
//     const value = Payload.value.pieces;
//     console.log(value);
    
//     value['wa_pawn'].id = '22d'
// }