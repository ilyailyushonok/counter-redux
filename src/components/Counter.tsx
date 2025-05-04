import s from './Counter.module.css'

type Props = {
    count: number
    increment: () => void
    reset: () => void
}

export const Counter = ({count,reset,increment}:Props) => {
    return (
        <div className={s.counterWrapper}>
            <div className={s.scope}>{count}</div>

            <div className={s.btnWrapper}>

            <button className={s.btn} onClick={increment}>inc</button>
            <button className={s.btn} onClick={reset}>res</button>

            </div>
        </div>
    );
};

