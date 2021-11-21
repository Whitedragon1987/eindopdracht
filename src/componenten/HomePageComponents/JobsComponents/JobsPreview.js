import styles from "./Jobs.module.css";
import jobs1 from "../../../assets/Jobs/tuinaanleg.jpg";
import jobs2 from "../../../assets/Jobs/snoeien.jpg";
import jobs3 from "../../../assets/Jobs/graven.jpg";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";

function JobsPreview() {

    const {user} = useContext(AuthContext);

    return (

        <>
            <div className={styles['jobs-wrapper']} >

                <p> Diensten </p>

                <ul className={styles['jobs-images']} >

                    <div className={styles['jobs1']} >

                        <img src={jobs1} alt={jobs1}/>

                    </div>

                    <div className={styles['jobs2']} >

                        <img src={jobs2} alt={jobs2}/>

                    </div>

                    <div className={styles['jobs3']} >

                        <img src={jobs3} alt={jobs3}/>

                    </div>

                </ul>

                {user != null &&

                <NavLink to="/machines" exact activeClassName="active-link"
                         className={styles['link']} >

                    meer...

                </NavLink>

                }


            </div>

        </>

    )

}

export default JobsPreview;