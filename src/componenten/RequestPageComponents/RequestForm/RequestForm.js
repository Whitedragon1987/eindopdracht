import React from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import vrachtwagen from "../../../assets/Machines/vrachtwagen.jpg";
import offerte from "../../../assets/offerte.jpg";
import {useHistory, Link} from "react-router-dom";
import styles from "./RequestForm.module.css"
import {useFormContext} from "react-hook-form";
import Selector from "../RequestSelectorsComponents/Selector";
import DatePicker from "react-datepicker";

function RequestForm() {

    return(
        <div className={styles['request-form']}>
            <div className={styles['selector-wrapper']}>

                <Selector
                    title="Machines"
                    image={kraan}
                />

                <Selector
                    title="Offerte"
                    image={offerte}
                />

                <Selector
                    title="Diensten"
                    image={vrachtwagen}
                />

            </div>

            <br/>

            <h2>Wanneer zou u dit het liefste willen?</h2>

            <br/>

            <div className={styles['preference-wrapper']}>


                <div>

                    <DatePicker/>

                </div>

                <div>

                    <DatePicker/>

                </div>

            </div>

        </div>
    )
}

export default RequestForm;