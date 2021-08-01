import styles from "./SignInButton.module.css"
import {useFormContext} from "react-hook-form";

function SignInButton() {

    return(
        <button className={styles['sign-in-button']} >
            Schrijf in!
        </button>
    )
}

export default SignInButton;