import './App.css'
import {Settings} from "./components/Settings.tsx";
import {Counter} from "./components/Counter.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    changeMaxValueAC,
    changeMinValueAC,
    incrementorAC,
    resetAC,
    settingsSetAC,
    validationAC
} from "./module/counter-reducer.ts";
import {RootStateType} from "./store/store.ts";


function App() {

    const selectCount = (state: RootStateType): number => state.counter.count
    const selectMaxCount = (state: RootStateType): number => state.counter.maxValue
    const selectMinCount = (state: RootStateType): number => state.counter.minValue
    const selectIsValid = (state: RootStateType): boolean => state.counter.isValid
    const selectEditMode = (state: RootStateType): boolean => state.counter.editMode

    const count = useSelector(selectCount);
    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);
    const validation = useSelector(selectIsValid);
    const editMode = useSelector(selectEditMode);

    const dispatch = useDispatch();

    const setValidation = (value: boolean) => {
        dispatch(validationAC({isValid: value}));
    }
    if (minCount >= maxCount || minCount < 0) {
        setValidation(false)
    } else {
        setValidation(true)
    }
    const increment = () => {
        dispatch(incrementorAC({maxCount}))
    }
    const reset = () => {
        dispatch(resetAC())
    }

    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC({value}))
    }
    const changeMinValue = (value: number) => {
        dispatch(changeMinValueAC({value}))
    }
    const settingsSet = () => {
        dispatch(settingsSetAC())
    }

    return (
        <div className='app'>
            <Settings maxCount={maxCount}
                      minCount={minCount}
                      changeMaxValue={changeMaxValue}
                      changeMinValue={changeMinValue}
                      settingsSet={settingsSet}
                      validation={validation}
            />
            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     validation={validation}
                     editMode={editMode}
            />
        </div>
    )
}

export default App