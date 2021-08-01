import React from "react";
import SignUpForm from "../componenten/FormComponenten/SignUpForm/SignUpForm";
import SignInButton from "../componenten/Buttons/SignInButton/SignInButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import {useFormContext} from "react-hook-form";
import axios from "axios";

function SignUpPage() {
    const { handleSubmit } = useFormContext();
    const data = {};

    async function onSubmit(data) {
        // data.preventDefault();
        console.log(data);
        try {
            const response = await axios.post('https://localhost:8443/users', {username: data.username, password: data.password, emailAddress: data.emailAddress});
            console.log(response)
        } catch (error){
            console.log(error)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <SignUpForm  />

                <SignInButton type="submit"/>

                <BackButton/>

            </form>

        </>
    )
}

export default SignUpPage;