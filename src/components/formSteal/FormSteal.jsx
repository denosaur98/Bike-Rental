import React from 'react';
import InputMask from 'react-input-mask';
import css from './FormSteal.module.css';

function FormSteal(props) {
    return (
        <div className={css.form_modal}>
            <form className={css.form}>
                <div className={css.cancel_container}>
                    <div className={css.cancel} onClick={props.onClick}></div>
                </div>
                <p className={css.steal_headline}>СООБЩИТЬ</p>
                <div className={css.inputs}>
                    <input type="text" placeholder="Номер лицензии:" className={css.steal_inps} required/>
                    <input type="text" placeholder="ФИО клиента:" className={css.steal_inps} required/>
                    <input type="text" placeholder="Тип велосипеда:" className={css.steal_inps} required/>
                    <input type="text" placeholder="Цвет велосипеда:" className={css.steal_inps} required/>
                    <input type="text" placeholder="Тип велосипеда:" className={css.steal_inps} required/>
                    <InputMask mask="99.99.2099" placeholder="ДД.ММ.ГГГГ" title="Укажите дату кражи" className={css.steal_inps} required/>
                    <textarea placeholder="Дополнительная информация:" className={css.info}></textarea>
                </div>
                <div className={css.buttons}>
                    <button type="submit" className={css.submit}>Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default FormSteal;