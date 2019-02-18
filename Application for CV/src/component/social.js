const initialState = [];

export default function Social(state = initialState,action ){

    if(action.type === "social"){
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
