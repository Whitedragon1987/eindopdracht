import React from "react";
import styles from "./BackButton.module.css"

function BackButton() {

    return(
        <button className={styles['back-button']}>
            Vorige
        </button>
    )
}

export default BackButton;