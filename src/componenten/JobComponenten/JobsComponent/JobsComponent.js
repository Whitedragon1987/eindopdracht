import React from "react";
import styles from "./JobsComponent.module.css"

function JobsComponent() {

    return(
        <div id="pageWrapper" className={styles['jobs-component']}>

            <h1 className="job-name">Naam :</h1>
            <p>Dienst</p>
            <h6 className="description">Omschrijving :</h6>
            <p>jksdhfkdjs hsdkajf haks kjsda sdhfkajssdfh akjh </p>
            <h6 className="measurements">Afmetingen :</h6>
            <p>kalsj;hdfl; lksdh flk</p>
            <div>
                <label htmlFor="addJob">
                    Klik hier om deze dienst te selecteren voor uw verzoek.
                </label>

                <input
                    type="checkbox"
                    name="alternateAdress"
                    id="addJob"
                />
            </div>
        </div>
    )
}

export default JobsComponent;