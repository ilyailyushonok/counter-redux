import s from './Counter.module.css'

type Props = {
    count: number
    increment: () => void
    reset: () => void
    validation:boolean
}

export const Counter = ({validation,count, reset, increment}: Props) => {

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
            <div className={s.scope}>{validation
                ? <span className={s.spanCount}>{count}</span>
                : <span className={s.err}>incorrect value</span>}
            </div>

            <div className={s.btnWrapper}>

                <button className={s.btn} onClick={onClickIncrementHandler}>inc</button>
                <button className={s.btn} onClick={onClickResetHandler}>res</button>

            </div>
        </div>
    );
};

