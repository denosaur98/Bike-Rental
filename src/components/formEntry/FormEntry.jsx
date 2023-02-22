import axios from "axios";
import React, { useState } from "react";
import css from "./FormEntry.module.css";

function FormEntry(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    const bodySignIn = {
      email,
      password,
    };

    axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_in", bodySignIn)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setFormSubmitted(true);
      })
      .catch((error) => console.log("error", error));
  };

  if (formSubmitted) {
    return null;
  }

  return (
    <div className={css.form_modal}>
      <form className={css.form} onSubmit={handleSignIn}>
        <div className={css.cancel_container}>
          <div className={css.cancel} onClick={props.onClick}></div>
        </div>
        <p className={css.entry_headline}>ВХОД</p>
        <div className={css.inputs}>
          <input
            type="text"
            placeholder="Логин:"
            className={css.entry_inps}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль:"
            className={css.entry_inps}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={css.buttons}>
          <button type="submit" className={css.submit}>Войти</button>
          <a href="/#" className={css.forgot}>Забыли пароль?</a>
        </div>
      </form>
    </div>
  );
}

export default FormEntry;