import React from 'react';
import css from './FormEntry.module.css';

function OpenFormEntry(props) {
    return (
        <div className={css.form_modal}>
            <form className={css.form}>
                <div className={css.cancel_container}>
                    <div className={css.cancel} onClick={props.onClick}></div>
                </div>
                <p className={css.entry_headline}>ВХОД</p>
                <div className={css.inputs}>
                    <input type="text" placeholder="Логин:" className={css.entry_inps} required/>
                    <input type="password" placeholder="Пароль:" className={css.entry_inps} required/>
                </div>
                <div className={css.buttons}>
                    <button type="submit" className={css.submit}>Войти</button>
                    <a href="/#" className={css.forgot}>Забыли пароль?</a>
                </div>
            </form>
        </div>
    );
}

export default OpenFormEntry;