const initialState = [];

export default function Skills(state = initialState,action ){

    if(action.type === "Skills"){
        console.log([
            ...state,
            action.payload
        ]);
        alert("aaaaaa");
       
        return [
            ...state,
            action.payload
        ]
    }
    return state;
    
}
