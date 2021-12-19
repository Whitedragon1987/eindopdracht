import LoginForm from "../LoginForm/LoginForm";
import LogInButton from "../../Buttons/LoginButton/LogInButton";
import SignUpLink from "../SignUpLink/SignUpLink";
import {useContext} from "react";
import {useFormContext} from "react-hook-form";
import styles from "./LogIn.module.css"
import axios from "axios";
import {AuthContext} from "../../../Context/AuthContext";
import LogOutButton from "../../Buttons/LogoutButton/LogOutButton";

function LogIn() {

    const { handleSubmit } = useFormContext();
    const {login} = useContext(AuthContext);

    async function onSubmit(data) {

        try {

            const result = await axios.post("http://localhost:8080/authenticate", data);

            login(result.data.jwt);

        } catch (error){

            console.error(error);

        }

    }

    return(

        <>

            <form onSubmit={handleSubmit(onSubmit)} >

                <div className={styles['login-wrapper']} >

                    <h1> Inloggen bij Invisible Gardening </h1>

                    <LoginForm/>

                    <LogInButton onClick={login} />

                    <LogOutButton/>

                    <SignUpLink/>

                </div>

            </form>

        </>

    )

}

export default LogIn;