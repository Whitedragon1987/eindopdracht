import React from "react";
import LoginForm from "../componenten/FormComponenten/LoginForm/LoginForm";
import LogInButton from "../componenten/Buttons/LoginButton/LogInButton";
import SignInLink from "../componenten/LinkComponenten/SignInLink/SignInLink";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import {useFormContext} from "react-hook-form";

function LoginPage() {
    const { handleSubmit } = useFormContext();
    const data = {};

    function onSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <LoginForm/>

                <LogInButton/>

                <SignInLink/>

                <BackButton/>

            </form>

        </>
    )
}

export default LoginPage;