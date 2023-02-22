import React, { useState } from 'react';
import axios from 'axios';
import css from './FormReg.module.css';

const ERROR_STATUS = 'ERR';

function FormReg(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleReg = (e) => {
    e.preventDefault();
  
    const body = {
      email,
      password,
      firstName,
      lastName,
      clientId: '5e87a9e5-10d9-4a40-bc68-ae02e050dc14',
    };
  
    axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", body)
      .then((response) => {
        if (response.data.status === ERROR_STATUS) {
          setError(response.data.message);
        } else {
          console.log(response.data);
          props.onClick();
        }
      })
      .catch((error) => console.log("error", error));
    };

  return (
    <div className={css.form_modal}>
      <form className={css.form} onSubmit={handleReg}>
        <div className={css.cancel_container}>
          <div className={css.cancel} onClick={props.onClick}></div>
        </div>
        <p className={css.reg_headline}>РЕГИСТРАЦИЯ</p>
        <div className={css.inputs}>
          <input
            type="text"
            placeholder="Имя:"
            className={css.reg_inps}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Фамилия:"
            className={css.reg_inps}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Почта:"
            className={css.reg_inps}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль:"
            className={css.reg_inps}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error != null && <div>{error}</div>}
        <div className={css.buttons}>
          <button type="submit" className={css.submit}>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
}

export default FormReg;