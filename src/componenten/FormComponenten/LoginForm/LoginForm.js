import React from "react";
import styles from "./LoginForm.module.css";
import {useFormContext} from "react-hook-form";

function LoginForm() {

    const { register, formState: {errors} } = useFormContext();
    const message = "Dit veld mag niet leeg blijven"
    return (
        <>


                <div className={styles["log-in-form"]}>

                    <label htmlFor="username">
                        Gebruikersnaam :
                    </label>

                    <input
                        id="username"
                        placeholder="gebruikersnaam"
                        {...register("username", {required: { value:true, message: message}})}
                    />{errors.username && <p>{errors.username.message}</p>}

                    <label htmlFor="password">
                        Wachtwoord :
                    </label>

                    <input
                        id="password"
                        placeholder="wachtwoord"
                        {...register("password", {required: {value: true, message: message }})}
                    />{errors.password && <p>{errors.password.message}</p>}

                </div>


        </>

    )
}

export default LoginForm
