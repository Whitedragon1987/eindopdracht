import styles from "./Profile.module.css"
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";
import PrivateContent from "../PrivateContent/PrivateContent";
import {NavLink} from "react-router-dom";

function Profile() {

    const { user } = useContext(AuthContext);

    return(

        <>

            {user != null ?

                <div className={styles["pagewrapper"]} >

                    {user &&

                    <div className={styles["profile-warpper"]} >

                        <>

                            <h1>Uw gebruikersgegevens</h1>

                            <div className={styles["profile"]} >

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

                :

                <>

                    <h1> Om deze content te zien moet u zijn ingelogd </h1>

                    <NavLink to="/login">Log hier in</NavLink>
                </>

            }


        </>

    )

}

export default Profile;