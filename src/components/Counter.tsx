import s from './Counter.module.css'

type Props = {
    count: number
    increment: () => void
    reset: () => void
    isValidation: boolean
    isEditMode: boolean
}

export const Counter = ({isValidation, count, reset, increment, isEditMode}: Props) => {

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
            <div className={s.scope}>{
                //todo вынести в отдельный компонент
                !isValidation
                    ? <span className={s.err}>incorrect value</span>
                    : isEditMode
                        ? <span>Set is new values</span>
                        : <span className={s.spanCount}>{count}</span>
            }
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} onClick={onClickIncrementHandler}>inc</button>
                <button className={s.btn} onClick={onClickResetHandler}>res</button>
            </div>
        </div>
    );
};

