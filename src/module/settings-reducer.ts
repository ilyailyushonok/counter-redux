import {createAction, createReducer} from "@reduxjs/toolkit";


export const settingsMaxValueAC = createAction('settings/settingsMaxValue')
export const settingsMinValueAC = createAction('settings/settingsMinValue')
export const settingsSetAC = createAction('settings/settingsSet')


export const settingsReducer=createReducer(settingsMaxValueAC, (builder)=>{
    builder
        .addCase(settingsMinValueAC, (state, action)=>{

        })
        .addCase(settingsMaxValueAC, (state, action)=>{

        })
        .addCase(settingsSetAC, (state, action)=>{

        })
})