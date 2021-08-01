import styles from "./Jobs.module.css";
import jobs1 from "../../../assets/Jobs/tuinaanleg.jpg";
import jobs2 from "../../../assets/Jobs/snoeien.jpg";
import jobs3 from "../../../assets/Jobs/graven.jpg";
import {NavLink} from "react-router-dom";

function Jobs() {

    return (
        <>
            <div className={styles['jobs-wrapper']}>
                <p>Machines</p>
                <ul className={styles['jobs-images']} >
                    <div className={styles['jobs1']}>
                        <img src={jobs1}/>
                    </div>
                    <div className={styles['jobs2']}>
                        <img src={jobs2}/>
                    </div>
                    <div className={styles['jobs3']}>
                        <img src={jobs3}/>
                    </div>

                </ul>
                <NavLink to="/machines"  exact activeClassName="active-link" className={styles['link']}>meer...</NavLink>
            </div>
        </>
    )
}

export default Jobs;