const characterReducer = (state= [] , action) => {

    switch(action.type){
        case 'CHAR_NAME':
            return  [...state,...action.payload];
        default:
            return state;    
    }
}

export default characterReducer;