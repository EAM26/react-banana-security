import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";

function SignUp() {

    function handleFormSubmit(data) {
        login(data.email)
    }
    const {login, setUserData } = useContext(AuthContext)

    const { register, handleSubmit } = useForm()
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <p>*Invoervelden*</p>
          <label htmlFor="email-field">email<input type="email" id="email-field" {...register("email")}/></label>
          <label htmlFor="password-field">wachtwoord<input type="password" id="password-field" {...register("password")} /></label>
          <label htmlFor="name-field">gebruikersnaam<input type="text" id="name-field" {...register("name")}/></label>
          <button type="submit">verstuur</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;