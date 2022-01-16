import {combineReducers} from 'redux'
import shopReducer from './shop/shopReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    shop:shopReducer,
    user:userReducer
})

export default rootReducer