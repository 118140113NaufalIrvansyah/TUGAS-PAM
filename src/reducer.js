const initial = {
    posisi : 0
}


const Posisimobil = (kondisi = initial , action) => {
    switch(action.type){
        case "Mundur" : 
        return {
            ...kondisi ,
            posisi : kondisi.posisi - 30 
        }
        case "Maju":
        return {
            ...kondisi ,
            posisi : kondisi.posisi + 30
        }

        default :
        return kondisi 
    }
}

export default Posisimobil