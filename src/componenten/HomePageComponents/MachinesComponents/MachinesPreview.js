import machine1 from "../../../assets/Machines/kraan.jpg";
import machine2 from "../../../assets/Machines/minikraan.jpg";
import machine3 from "../../../assets/Machines/Trilplaat groot.jpg";
import machine4 from "../../../assets/Machines/shovel.jpg";
import machine5 from "../../../assets/Machines/vrachtwagen.jpg";
import styles from "./Machines.module.css";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";

function MachinesPreview() {

    const {user} = useContext(AuthContext);

    return (

        <>

            <div className={styles['machine-wrapper']} >

                <p> Machines </p>

                <ul className={styles['machine-images']} >

                    <div className={styles['machine1']} >

                        <img src={machine1} alt={machine1}/>

                    </div>

                    <div className={styles['machine2']} >

                        <img src={machine2} alt={machine2}/>

                    </div>

                    <div className={styles['machine3']} >

                        <img src={machine3} alt={machine3}/>

                    </div>

                    <div className={styles['machine4']} >

                        <img src={machine4} alt={machine4}/>

                    </div>

                </ul>

                {user &&

                <NavLink to="/machines" exact activeClassName="active-link"
                         className={styles['link']}>

                    meer...

                </NavLink>

                }

            </div>

        </>

    )

}

export default MachinesPreview;