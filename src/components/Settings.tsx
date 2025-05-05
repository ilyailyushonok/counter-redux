import s from './Settings.module.css'

type Props = {

}

export const Settings = () => {
    return (
        <div className={s.settingsWrapper}>
            <div className={s.inputWrapper}>
                <span>max value</span>
                <input type="number"/>
            </div>
            <div className={s.inputWrapper}>
                <span>start value</span>
                <input type="number"/>
            </div>

            <button className={s.btn}>set</button>
            </div>
            );
            };

