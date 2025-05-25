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
import {selectCount, selectEditMode, selectIsValid, selectMaxCount, selectMinCount} from "./module/selectors.ts";


function App() {
    const count = useSelector(selectCount);
    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);
    const validation = useSelector(selectIsValid);
    const isEditMode = useSelector(selectEditMode);

    const dispatch = useDispatch();

    const setValidation = (isValid: boolean) => {
        dispatch(validationAC({isValid}));
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
                      isValidation={validation}
            />
            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     isValidation={validation}
                     isEditMode={isEditMode}
            />
        </div>
    )
}

export default App