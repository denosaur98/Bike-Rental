import React, { useState } from 'react';
import FormEntry from '../formEntry/FormEntry';
import FormReg from '../formReg/FormReg';
import FormSteal from '../formSteal/FormSteal';
import css from '../header/Header.module.css';

function Header() {
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState('entry');
    const handleClick = (form) => {
        setFormType(form);
        setShowForm(!showForm);
    };
    return (
        <div className={css.header_container}>
            <div className={css.header}>
                <a href="/#" className={css.home} title="Перейти на Главную">Главная</a>
                <a href="/#" className={css.workers} title="Сотрудники">Сотрудники</a>
                <a href="/#" className={css.steal} title="Сообщить о краже" onClick={() => handleClick('steal')}>Сообщить о краже</a>
                {showForm && formType === 'steal' && <FormSteal onClick={handleClick}/>}
            </div>
            <div className={css.authorization}>
                <a href="/#" className={css.entry} title="Войти" onClick={() => handleClick('entry')}>Войти</a>
                {showForm && formType === 'entry' && <FormEntry onClick={handleClick}/>}
                <span>&nbsp;|&nbsp;</span>
                <a href="/#" className={css.check_in} title="Регистрация" onClick={() => handleClick('reg')}>Регистрация</a>
                {showForm && formType === 'reg' && <FormReg onClick={handleClick}/>}
            </div>
        </div>
    );
}

export default Header;