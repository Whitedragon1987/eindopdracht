import styles from "./LogOutButton.module.css"
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";

function LogOutButton() {

    const {logout} = useContext(AuthContext);

    return(

        <button className={styles['log-out-button']}
                type="button"
                onClick={logout} >

            Logout!

        </button>

    )

}

export default LogOutButton;