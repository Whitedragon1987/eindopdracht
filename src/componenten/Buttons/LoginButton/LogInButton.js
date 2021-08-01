import React from "react";
import styles from "./LogInButton.module.css"
import {useHistory} from "react-router-dom";
import {useFormContext} from "react-hook-form";

function LogInButton() {

    return(
        <button className={styles['log-in-button']} >
            Log In!
        </button>
    )
}

export default LogInButton;