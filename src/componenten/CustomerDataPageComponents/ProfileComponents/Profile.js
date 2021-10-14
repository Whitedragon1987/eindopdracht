import styles from "./Profile.module.css"
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";
import PrivateContent from "../PrivateContent/PrivateContent";

function Profile() {

    const { user } = useContext(AuthContext);

    return(

        <>

            <div
                className={styles["pagewrapper"]} >

                {user &&

                <div className={styles["profile-warpper"]} >

                    <>

                        <h1>Uw gebruikersgegevens</h1>

                        <div
                            className={styles["profile"]} >

                            <p> Gebruikersnaam: </p>

                            <p> {user.username} </p>

                            <p> Email: </p>

                            <p> {user.email} </p>

                        </div>

                    </>

                </div>

                }

                    <PrivateContent/>

            </div>

        </>

    )

}

export default Profile;