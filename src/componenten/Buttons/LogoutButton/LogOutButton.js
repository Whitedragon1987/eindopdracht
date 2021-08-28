import React, {useContext} from "react";
import styles from "./LogOutButton.module.css"
import {useHistory} from "react-router-dom";
import {useFormContext} from "react-hook-form";
import {AuthContext} from "../../../Context/AuthContext";

function LogOutButton() {
    const {logout} = useContext(AuthContext);

    return(
        <button
            className={styles['log-out-button']}
            type="button"
            onClick={logout}
        >
            Logout!
        </button>
    )
}

export default LogOutButton;