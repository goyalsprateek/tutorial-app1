import { BUY_ITEMS } from "./shopTypes"


const initialState = {
    noOfItems : 100
}

const shopReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_ITEMS: return {
            ...state,
            noOfItems : state.noOfItems -1
        }
        default: return state
    }
}

export default shopReducer