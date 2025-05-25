import s from './Counter.module.css'

type Props = {
    count: number
    increment: () => void
    reset: () => void
    isValidation: boolean
    isEditMode: boolean
    maxCount: number
}

const CounterScope=({isEditMode,isValidation,count}: {isEditMode:boolean,isValidation:boolean,count:number})=>{
    return (
        !isValidation
            ? <span className={s.err}>incorrect value</span>
            : isEditMode
                ? <span>Set is new values</span>
                : <span className={s.spanCount } >{count}</span>
    )
}

export const Counter = ({maxCount, count, reset, increment,isValidation,isEditMode}: Props) => {

    const onClickIncrementHandler = () => {
        increment()
        localStorage.setItem('count', JSON.stringify(++count))
    }
    const onClickResetHandler = () => {
        reset()
        localStorage.setItem('count', JSON.stringify(0))
    }
    return (
        <div className={s.counterWrapper}>
            <div className={`${s.scope}  ${count===maxCount?s.red:""}`}>
                <CounterScope count={count} isEditMode={isEditMode} isValidation={isValidation}/>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} onClick={onClickIncrementHandler}>inc</button>
                <button className={s.btn} onClick={onClickResetHandler}>res</button>
            </div>
        </div>
    );
};

