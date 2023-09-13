import React from 'react'

const loginReducer = (state = true, action) => {
    switch (action.type){
        case "login":
            return !state;

        default:
             return state
                }

}

export default loginReducer