import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../features/auth/model/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer