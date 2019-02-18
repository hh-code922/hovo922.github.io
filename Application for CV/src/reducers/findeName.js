const initialState = '';

export default function tracks(state = initialState,action ){

    if(action.type === "FIND_TRACK"){
        alert(action.payload);
        return action.payload;
    }
    return state;
    
}