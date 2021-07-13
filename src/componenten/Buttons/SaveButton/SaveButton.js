import React from "react";
import styles from "./SaveButton.module.css"

function SaveButton() {

    return(
        <button className={styles['safe-button']}>
            Opslaan!
        </button>
    )
}

export default SaveButton;