import React, {Component} from 'react';


/*class Info extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div className =''>
                <h2>Info</h2>
            </div>
        )
    }
}*/

const initialState = [];

export default function Info(state = initialState,action ){

    if(action.type === "info"){
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


