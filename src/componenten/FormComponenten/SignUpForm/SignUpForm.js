import React from "react";
import styles from "./SignUpForm.module.css";
import {useFormContext} from "react-hook-form";

function SignUpForm() {

    const { register, formState: {errors} } = useFormContext();
    const message = "Dit veld mag niet leeg blijven"

    return(
        <>

                <div className={styles['sign-in-form']}>

                    <label htmlFor="username">
                        Gebruikersnaam :
                    </label>

                    <div>
                        <input
                            id="username"
                            placeholder="gebruikersnaam"
                            {...register("username", {required: { value:true, message: message}})}
                        />{errors.username && <p>{errors.username.message}</p>}
                    </div>



                    <label htmlFor="emailAddress">
                        Emailadres :
                    </label>

                    <div>
                        <input
                            id="emailAddress"
                            placeholder="uw emailadres"
                            {...register("emailAddress", {required: { value:true, message: message}})}
                        />{errors.emailAddress && <p>{errors.emailAddress.message}</p>}
                    </div>


                    <label htmlFor="password">
                        Wachtwoord :
                    </label>

                    <div>
                        <input
                            id="password"
                            placeholder="wachtwoord"
                            {...register("password", {required: { value:true, message: message}})}
                        />{errors.password && <p>{errors.password.message}</p>}
                    </div>


                    <label htmlFor="confirmEmailAddress">
                        Bevestig uw emailadres :
                    </label>

                    <div>
                        <input
                            id="confirmEmailAddress"
                            placeholder="wachtwoord"
                            {...register("confirmEmailAddress", {required: { value:true, message: message}})}
                        />{errors.confirmEmailAddress && <p>{errors.confirmEmailAddress.message}</p>}
                    </div>

                </div>


        </>
    )
}

export default SignUpForm;