import React from 'react';
import css from './FormReg.module.css';

function OpenFormReg(props) {
    return (
        <div className={css.form_modal}>
            <form className={css.form}>
                <div className={css.cancel_container}>
                    <div className={css.cancel} onClick={props.onClick}></div>
                </div>
                <p className={css.reg_headline}>РЕГИСТРАЦИЯ</p>
                <div className={css.inputs}>
                    <input type="text" placeholder="Имя:" className={css.reg_inps}/>
                    <input type="text" placeholder="Фамилия:" className={css.reg_inps}/>
                    <input type="text" placeholder="Почта:" className={css.reg_inps} required/>
                    <input type="text" placeholder="Id:" className={css.reg_inps} required/>
                    <input type="password" placeholder="Пароль:" className={css.reg_inps} required/>
                </div>
                <div className={css.buttons}>
                    <button type="submit" className={css.submit}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default OpenFormReg;