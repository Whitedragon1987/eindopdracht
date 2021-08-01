import React from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import styles from "./MachineComponent.module.css"

function MachineComponent() {

    return(
        <div id="pageWrapper" className={styles['machine-component']}>
            <h1 className="machine-name">Naam :</h1>
            <p>laksfoiashf</p>
            <br/>
            <p className="description">Omschrijving :</p>
            <p>hier komt de omschrijving van een machine</p>
            <br/>
            <p className="type">Soort :</p>
            <p>hier komt het soort van de machine</p>
            <br/>
            <p className="measurements">Afmetingen :</p>
            <p>hier komen de machine afmetingen</p>
            <br/>
        </div>
    )
}

export default MachineComponent;