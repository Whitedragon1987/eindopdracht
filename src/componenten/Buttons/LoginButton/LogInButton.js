import React, {useContext} from "react";
import styles from "./LogInButton.module.css"
import {AuthContext} from "../../../Context/AuthContext";

function LogInButton() {
    const {login} = useContext(AuthContext);

    return(
        <button
            className={styles['log-in-button']}
        >
            Log In!
        </button>
    )
}

export default LogInButton;