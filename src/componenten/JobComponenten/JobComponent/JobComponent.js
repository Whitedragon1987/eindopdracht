import React from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import styles from "./JobComponent.module.css"

function JobComponent() {

    return(
        <div id="pageWrapper" className={styles['job-component']}>
            <h1 className="job-name">Naam : </h1>
            <p> hier komt de naam van de dienst</p>
            <br/>
            <p className="description">Omschrijving :</p>
            <p> hier komt de omschrijving van de dienst</p>
            <br/>
        </div>
    )
}

export default JobComponent;