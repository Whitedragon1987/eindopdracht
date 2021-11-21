import project1 from "../../../assets/projects/japanse tuin.jpg";
import project2 from "../../../assets/projects/moderne tuin.jpg";
import project3 from "../../../assets/projects/Strakke tuin.jpg";
import project4 from "../../../assets/projects/tuin beton.jpg";
import project5 from "../../../assets/projects/tuin druk.jpg";
import styles from "./Projects.module.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../Context/AuthContext";

function Projects() {

    const {user} = useContext(AuthContext);

    return (

        <>
            <div className={styles['project-wrapper']} >

                <p> Afgeronde Projecten </p>

                <ul className={styles['project-images']} >

                    <div className={styles['project1']}>

                       <img src={project1} alt={project1}/>

                    </div>

                    <div className={styles['project2']} >

                        <img src={project2} alt={project2}/>

                    </div>

                    <div className={styles['project3']} >

                        <img src={project3} alt={project3}/>

                    </div>

                    <div className={styles['project4']} >

                        <img src={project4} alt={project4}/>

                    </div>

                    <div className={styles['project5']} >

                        <img src={project5} alt={project5}/>

                    </div>

                </ul>

                {user &&

                    <NavLink to="/review" exact activeClassName="active-link"
                             className={styles['link']}>

                        meer...

                    </NavLink>

                }

            </div>

        </>

    )

}

export default Projects;