import s from './Settings.module.css'
import {ChangeEvent} from "react";

type Props = {
    changeMinValue: (value: number) => void,
    changeMaxValue: (value: number) => void,
    settingsSet: () => void,
    minCount: number,
    maxCount: number,
    validation: boolean
}

export const Settings = ({validation, maxCount, minCount, settingsSet, changeMinValue, changeMaxValue}: Props) => {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = e.currentTarget.value
        changeMaxValue(+maxValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = e.currentTarget.value
        changeMinValue(+minValue)
        localStorage.setItem('minValue', JSON.stringify(minValue))

    }
    const onClickHandler = () => {
        settingsSet()
    }

    return (
        <div className={s.settingsWrapper}>
            <div className={s.inputWrapper}>
                <span>max value</span>
                <input type="number"
                       value={maxCount}
                       onChange={onChangeMaxValueHandler}
                       className={!validation ? s.err : ''}
                />
            </div>
            <div className={s.inputWrapper}>
                <span>start value</span>
                <input type="number"
                       value={minCount}
                       onChange={onChangeMinValueHandler}
                       className={!validation ? s.err : ''}
                />
            </div>

            <button className={s.btn} onClick={onClickHandler}>set</button>
        </div>
    );
};

