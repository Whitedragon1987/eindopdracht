import styles from "./UpdateButton.module.css"
import {useHistory} from "react-router-dom";

function UpdateButton() {
    const history = useHistory();

    return(
        <button className={styles['update-button']}>
            Wijzig!
        </button>
    )
}

export default UpdateButton;