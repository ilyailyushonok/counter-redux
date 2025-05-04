import {createAction, createReducer} from "@reduxjs/toolkit";

export const incrementorAC = createAction('counter/increment')
export const resetAC = createAction('counter/reset')

const initialState = {
    count:0 as number,
}
type stateType = typeof initialState

export const  incrementorReducer=createReducer(initialState,(builder)=>{
    builder
        .addCase(incrementorAC,(state:stateType)=>{
            state.count++
        })
        .addCase(resetAC,(state:stateType)=>{
        state.count=0
    })
})
