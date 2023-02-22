import React, { useState, useEffect } from 'react';
import FormEntry from '../formEntry/FormEntry';
import FormReg from '../formReg/FormReg';
import FormSteal from '../formSteal/FormSteal';
import axios from 'axios';
import css from './Header.module.css';

function Header() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('entry');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleClick = (form) => {
    setFormType(form);
    setShowForm(!showForm);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      axios
        .get('https://sf-final-project-be.herokuapp.com/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserEmail(response.data.email);
          setShowForm(false); // закрываем форму после успешной авторизации
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  }, []);

  return (
    <div className={css.header_container}>
      <div className={css.header}>
        <a href="/#" className={css.home} title="Перейти на Главную">Главная</a>
        <a href="/#" className={css.workers} title="Сотрудники">Сотрудники</a>
        <a
          href="/#"
          className={css.steal}
          title="Сообщить о краже"
          onClick={() => handleClick('steal')}
        >Сообщить о краже</a>
        {showForm && formType === 'steal' && <FormSteal onClick={handleClick} />}
      </div>
      {!isLoggedIn ? (
        <div className={css.authorization}>
          <a
            href="/#"
            className={css.entry}
            title="Войти"
            onClick={() => handleClick('entry')}
          >Войти</a>
          {showForm && formType === 'entry' && <FormEntry onClick={handleClick} />}
          <span>&nbsp;|&nbsp;</span>
          <a
            href="/#"
            className={css.check_in}
            title="Регистрация"
            onClick={() => handleClick('reg')}
          >Регистрация</a>
          {showForm && formType === 'reg' && <FormReg onClick={handleClick} />}
        </div>
      ) : (
        <div className={css.authorization}>
          <a href="/#" className={css.email} title={userEmail}>{userEmail}</a>
          <span>&nbsp;|&nbsp;</span>
          <a href="/#" className={css.logout} title="Выйти" onClick={handleLogout}>Выйти</a>
        </div>
      )}
    </div>
  );
}

export default Header;