const initialState = [];

export default function Skills(state = initialState,action ){

    if(action.type === "img"){
        console.log([
            ...state,
            action.payload
        ]);
        alert(action.payload);
       
        return [
            
            action.payload
        ]
    }
    return state;
    
}