import React from "react";
import styles from "./BackButton.module.css"
import {useHistory} from "react-router-dom";

function BackButton() {

    const history = useHistory();

    function redirectBack() {
        history.push("/")
    }

    return(
        <button className={styles['back-button']} onClick={redirectBack}>
            Vorige
        </button>
    )
}

export default BackButton;
