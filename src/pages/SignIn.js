import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {

    const {login} = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    function handleClick(data) {
        login(data.email)
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form
          onSubmit={handleSubmit(handleClick)}
      >
        <p>*invoervelden*</p>
          <label htmlFor="email-field">email<input type="email" id="email-field" {...register("email")}/></label>
          <label htmlFor="password-field">wachtwoord<input type="password" id="password-field" {...register("password")} /></label>
        <button type="submit">Inloggen</button>
      </form>
      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;