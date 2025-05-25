import {RootStateType} from "../store/store.ts";

export const selectCount = (state: RootStateType): number => state.counter.count
export const selectMaxCount = (state: RootStateType): number => state.counter.maxValue
export const selectMinCount = (state: RootStateType): number => state.counter.minValue
export const selectIsValid = (state: RootStateType): boolean => state.counter.isValid
export const selectEditMode = (state: RootStateType): boolean => state.counter.editMode
