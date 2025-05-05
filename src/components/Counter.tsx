import s from './Counter.module.css'

type Props = {
    count: number
    increment: () => void
    reset: () => void
}

export const Counter = ({count, reset, increment}: Props) => {

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
            <div className={s.scope}>{count}</div>

            <div className={s.btnWrapper}>

                <button className={s.btn} onClick={onClickIncrementHandler}>inc</button>
                <button className={s.btn} onClick={onClickResetHandler}>res</button>

            </div>
        </div>
    );
};

