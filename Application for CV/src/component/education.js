const initialState = [];

export default function    Education(state = initialState,action ){

    if(action.type === "education"){
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
