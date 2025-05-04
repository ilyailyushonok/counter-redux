import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {incrementorReducer} from "../module/counter-reducer.ts";

const rootReducer = combineReducers({
    counter:incrementorReducer,
})
export const store=configureStore({reducer:rootReducer})

export type RootStateType = ReturnType<typeof rootReducer>;
