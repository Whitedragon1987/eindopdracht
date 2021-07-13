import React from "react";
import styles from "./MachinesComponent.module.css"

function MachinesComponent() {

    return(
        <div id="pageWrapper" className={styles['machines-component']}>

            <h1 className="machine-name">Naam :</h1>
            <p>Machine</p>
            <h6 className="description">Omschrijving :</h6>
            <p>jksdhfkdjs hsdkajf haks kjsda sdhfkajssdfh akjh </p>
            <h6 className="measurements">Afmetingen :</h6>
            <p>kalsj;hdfl; lksdh flk</p>
            <div>
                <label htmlFor="addMachine">
                    Klik hier om deze machine te selecteren voor uw verzoek.
                </label>

                <input
                    type="checkbox"
                    name="alternateAdress"
                    id="addMachine"
                />
            </div>
        </div>
    )
}

export default MachinesComponent;