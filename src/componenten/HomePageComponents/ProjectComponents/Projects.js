import project1 from "../../../assets/projects/japanse tuin.jpg";
import project2 from "../../../assets/projects/moderne tuin.jpg";
import project3 from "../../../assets/projects/Strakke tuin.jpg";
import project4 from "../../../assets/projects/tuin beton.jpg";
import project5 from "../../../assets/projects/tuin druk.jpg";
import styles from "./Projects.module.css"
import {NavLink} from "react-router-dom";

function Projects() {

    return (

        <>
            <div
                className={styles['project-wrapper']} >

                <p> Afgeronde Projecten </p>

                <ul
                    className={styles['project-images']} >

                    <div
                        className={styles['project1']}>

                       <img src={project1}/>

                    </div>

                    <div
                        className={styles['project2']} >

                        <img src={project2}/>

                    </div>

                    <div
                        className={styles['project3']} >

                        <img src={project3}/>

                    </div>

                    <div
                        className={styles['project4']} >

                        <img src={project4}/>

                    </div>

                    <div
                        className={styles['project5']} >

                        <img src={project5}/>

                    </div>

                </ul>

                <NavLink
                    to="/review"  exact activeClassName="active-link"
                         className={styles['link']} >

                    meer...

                </NavLink>

            </div>

        </>

    )

}

export default Projects;