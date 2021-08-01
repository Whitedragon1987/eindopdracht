import React from "react";
import {Link} from "react-router-dom";
import styles from "./LogInLink.module.css"

function LogInLink() {

    return (
        <>
            <h1 htmlFor="LogInLink" className={styles['log-in-link']}>
                <Link to = "/login">
                    Log In!
                </Link>
            </h1>
        </>
    )
}

export default LogInLink;