import React from "react";
import kraan from "../../../assets/kraan.jpg";
import styles from "./JobComponent.module.css"

function JobComponent() {

    return(
        <div id="pageWrapper" className={styles['job-component']}>
            <h1 className="job-name">Naam : </h1>
            <br/>
            <p className="description">Omschrijving :</p>
            <br/>
        </div>
    )
}

export default JobComponent;