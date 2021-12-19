import {useState} from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignUpButton from "../../Buttons/SignUpButton/SignUpButton";
import {useFormContext} from "react-hook-form";
import axios from "axios";
import styles from "./SignUp.module.css"
import {NavLink, useHistory} from "react-router-dom";

function SignUp() {

    const [loading, toggleLoading] = useState(false);
    const [registerSucces, toggleRegisterSucces] = useState(false);
    const [error, setError] = useState("")
    const { handleSubmit } = useFormContext();
    const history = useHistory();

    async function onSubmit(data) {

        toggleLoading(true);
        setError("");

        try {

             await axios.post('http://localhost:8080/users',

                {

                    username: data.username,
                    password: data.password,
                    email: data.email

                });

            toggleRegisterSucces(true);

            setTimeout(() => {

                history.push('/login');

            }, 500);

        } catch (error){

            console.error(error);

            setError(`Het registreren is mislukt. Probeer het opnieuw of log in met uw gebruikersnaam`);

        }

        toggleLoading(false);

    }

    return(

        <>

            <div className={styles['sign-up']} >

                <h1> Welkom bij Invisible Gardening </h1>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <SignUpForm/>

                    <SignUpButton type="submit" />

                    {registerSucces === true &&

                    <h1> Registratie is gelukt! Je wordt nu doorgestuurd naar de inlog pagina! </h1>}

                    {error && <h1> {error} </h1>}

                </form>

                <p> Heb je al een account?

                    <NavLink to="/login" >

                        Klik dan hier om in te loggen.

                    </NavLink>

                </p>

            </div>

        </>

    )

}

export default SignUp;