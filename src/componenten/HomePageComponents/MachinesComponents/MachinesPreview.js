import machine1 from "../../../assets/Machines/kraan.jpg";
import machine2 from "../../../assets/Machines/minikraan.jpg";
import machine3 from "../../../assets/Machines/Trilplaat groot.jpg";
import machine4 from "../../../assets/Machines/shovel.jpg";
import machine5 from "../../../assets/Machines/vrachtwagen.jpg";
import styles from "./Machines.module.css";
import {NavLink} from "react-router-dom";

function MachinesPreview() {

    return (

        <>

            <div className={styles['machine-wrapper']} >

                <p> Machines </p>

                <ul className={styles['machine-images']} >

                    <div className={styles['machine1']} >

                        <img src={machine1}/>

                    </div>

                    <div className={styles['machine2']} >

                        <img src={machine2}/>

                    </div>

                    <div className={styles['machine3']} >

                        <img src={machine3}/>

                    </div>

                    <div className={styles['machine4']} >

                        <img src={machine4}/>

                    </div>

                    <div className={styles['machine5']} >

                        <img src={machine5}/>

                    </div>

                </ul>

                <NavLink to="/machines"  exact activeClassName="active-link"
                         className={styles['link']} >

                    meer...

                </NavLink>

            </div>

        </>

    )

}

export default MachinesPreview;