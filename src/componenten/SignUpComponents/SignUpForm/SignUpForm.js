import React from "react";
import styles from "./SignUpForm.module.css";
import {useFormContext} from "react-hook-form";

function SignUpForm() {

    const { register, formState: {errors} } = useFormContext();
    const message = "Dit veld mag niet leeg blijven"

    return(

        <>

                <div
                    className={styles['sign-in-form']} >

                    <label
                        htmlFor="username" >

                        Gebruikersnaam :

                    </label>

                    <div>

                        <input
                            id="username"
                            placeholder="gebruikersnaam"
                            {...register("username",
                                {required: { value:true, message: message}})} />
                        {errors.username && <p> {errors.username.message} </p>}

                    </div>



                    <label
                        htmlFor="email" >

                        Email :

                    </label>

                    <div>

                        <input
                            id="email"
                            placeholder="uw email"
                            {...register("email",
                                {required: { value:true, message: message}})} />
                        {errors.email && <p> {errors.email.message} </p>}

                    </div>


                    <label
                        htmlFor="password" >

                        Wachtwoord :

                    </label>

                    <div>

                        <input
                            id="password"
                            placeholder="wachtwoord"
                            {...register("password",
                                {required: { value:true, message: message}})} />
                        {errors.password && <p> {errors.password.message} </p>}
                    </div>


                    <label
                        htmlFor="confirmEmail" >

                        Bevestig uw emailadres :

                    </label>

                    <div>

                        <input
                            id="confirmEmail"
                            placeholder="email"
                            {...register("confirmEmail",
                                {required: { value:true, message: message}})} />
                        {errors.confirmEmail && <p> {errors.confirmEmail.message} </p>}

                    </div>

                    <label
                        htmlFor="confirmPassword" >

                        Bevestig uw wachtwoord :

                    </label>

                    <div>

                        <input
                            id="confirmPassword"
                            placeholder="email"
                            {...register("confirmPassword",
                                {required: { value:true, message: message}})} />
                        {errors.confirmPassword && <p> {errors.confirmPassword.message} </p>}

                    </div>

                </div>

        </>

    )

}

export default SignUpForm;