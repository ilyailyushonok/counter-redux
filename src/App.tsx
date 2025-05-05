import './App.css'
import {Settings} from "./components/Settings.tsx";
import {Counter} from "./components/Counter.tsx";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeMinValueAC, incrementorAC, resetAC, settingsSetAC} from "./module/counter-reducer.ts";
import {RootStateType} from "./store/store.ts";



function App() {
    const selectCount = (state: RootStateType): number => state.counter.count
    const selectMaxCount = (state: RootStateType): number => state.counter.maxValue
    const selectMinCount = (state: RootStateType): number => state.counter.minValue

    const count = useSelector(selectCount);
    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);

    const dispatch = useDispatch();

    const increment = (value?:number) => {
         dispatch(incrementorAC({value}))
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
            />
            <Counter count={count}
                     increment={increment}
                     reset={reset}
            />
        </div>
    )
}

export default App