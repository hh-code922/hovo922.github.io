const initialState = [];

export default function Profession(state = initialState,action ){

    if(action.type === "profession"){
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