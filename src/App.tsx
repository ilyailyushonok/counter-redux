import './App.css'
import {Settings} from "./components/Settings.tsx";
import {Counter} from "./components/Counter.tsx";
import {useDispatch, useSelector} from "react-redux";
import {incrementorAC, resetAC} from "./module/counter-reducer.ts";
import {RootStateType} from "./store/store.ts";

function App() {
     const selectCount = (state:RootStateType):number => state.counter.count
    const count = useSelector(selectCount);

  const dispatch = useDispatch();

     const increment = () => {
        dispatch(incrementorAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }

    return (
        <div className='app'>
            <Settings/>
            <Counter count={count}
            increment={increment}
            reset={reset}/>
        </div>
    )
}
export default App