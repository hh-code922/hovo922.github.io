const initialState = [];

export default function Experiance(state = initialState,action ){

    if(action.type === "experiance"){
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
