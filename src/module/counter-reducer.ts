import {createAction, createReducer} from "@reduxjs/toolkit";

export const incrementorAC = createAction<{maxCount:number}>('counter/increment')
export const resetAC = createAction('counter/reset')
export const changeMaxValueAC = createAction<{ value: number }>('settings/settingsMaxValue')
export const changeMinValueAC = createAction<{ value: number }>('settings/settingsMinValue')
export const settingsSetAC = createAction('settings/settingsSet')
export const validationAC = createAction<{isValid:boolean}>('settings/validation')

const  getStorageValue=  (x: string)=>  {
    const item = localStorage.getItem(x);
    return item!==null? JSON.parse(item) : undefined;
}
const initialState:{count:number,minValue:number,maxValue:number,isValid:boolean,
     editMode:boolean
} = {
    count:getStorageValue('count')||0 ,
    minValue:getStorageValue('minValue')|| 0 ,
    maxValue:getStorageValue('maxValue')|| 1 ,
    isValid: true,
     editMode:false
}
type stateType = typeof initialState

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementorAC, (state: stateType,action) => {
            if(action.payload.maxCount > state.count)state.count++
        })
        .addCase(resetAC, (state: stateType) => {
            state.count = state.minValue
        })
        .addCase(changeMinValueAC, (state, action) => {
            state.minValue = action.payload.value
             state.editMode = true
        })
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.value
             state.editMode = true
        })
        .addCase(settingsSetAC, (state) => {
            state.count = state.minValue
             state.editMode = false
        })
        .addCase(validationAC, (state, action) => {
            state.isValid = action.payload.isValid
        })
})
