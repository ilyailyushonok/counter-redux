import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {incrementorReducer} from "../module/counter-reducer.ts";
import {settingsReducer} from "../module/settings-reducer.ts";

const rootReducer = combineReducers({
    counter:incrementorReducer,
    settings: settingsReducer,
})
export const store=configureStore({reducer:rootReducer})

export type RootStateType = ReturnType<typeof rootReducer>;
