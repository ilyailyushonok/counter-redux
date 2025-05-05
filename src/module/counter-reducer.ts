import {createAction, createReducer} from "@reduxjs/toolkit";

export const incrementorAC = createAction<{value?:number}>('counter/increment')
export const resetAC = createAction('counter/reset')
export const changeMaxValueAC = createAction<{ value: number }>('settings/settingsMaxValue')
export const changeMinValueAC = createAction<{ value: number }>('settings/settingsMinValue')
export const settingsSetAC = createAction('settings/settingsSet')
export const validationAC = createAction<{value:boolean}>('settings/validation')

const  getStorageValue=  (x: string)=>  {
    const item = localStorage.getItem(x);
    return item!==null? JSON.parse(item) : undefined;
}
const initialState:{count:number,minValue:number,maxValue:number,isValid:boolean} = {
    count:getStorageValue('count')||0 ,
    minValue:getStorageValue('minValue')|| 0 ,
    maxValue:getStorageValue('maxValue')|| 0 ,
    isValid: true

}
type stateType = typeof initialState

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementorAC, (state: stateType,action) => {
           if(action.payload.value) state.count=action.payload.value
           else state.count++
        })
        .addCase(resetAC, (state: stateType) => {
            state.count = 0
        })
        .addCase(changeMinValueAC, (state, action) => {
            state.minValue = action.payload.value
        })
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.value
        })
        .addCase(settingsSetAC, (state) => {
            state.count = state.minValue
        })
        .addCase(validationAC, (state, action) => {
            state.isValid = action.payload.value
        })
})
