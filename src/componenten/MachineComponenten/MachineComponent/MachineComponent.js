import React from "react";
import kraan from "../../../assets/kraan.jpg";
import styles from "./MachineComponent.module.css"

function MachineComponent() {

    return(
        <div id="pageWrapper" className={styles['machine-component']}>
            <h1 className="machine-name">Naam : </h1>
            <br/>
            <p className="description">Omschrijving :</p>
            <br/>
            <p className="type">Soort :</p>
            <br/>
            <p className="measurements">Afmetingen :</p>
            <br/>
        </div>
    )
}

export default MachineComponent;