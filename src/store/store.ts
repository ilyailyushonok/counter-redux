import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../module/counter-reducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer,

})
export const store = configureStore({reducer: rootReducer})

export type RootStateType = ReturnType<typeof rootReducer>;
