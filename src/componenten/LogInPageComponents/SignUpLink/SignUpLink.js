import React from "react";
import {Link} from "react-router-dom";
import styles from "./SignUpLink.module.css"

function SignUpLink() {

    return (

        <>
            <h5
                htmlFor="LogInLink"
                className={styles['sign-in-link']} >

                <Link
                    to = "/signup" >

                    Nog geen account? Schrijf u hier in

                </Link>

            </h5>

        </>

    )

}

export default SignUpLink;