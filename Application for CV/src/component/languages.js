const initialState = [];

export default function Languages(state = initialState,action ){

    if(action.type === "languages"){
        console.log([
            ...state,
            action.payload
        ]);
       
        return [
            ...state,
            action.payload
        ]
    }
    return state;
    
}
