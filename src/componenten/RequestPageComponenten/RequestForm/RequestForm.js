import React from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import vrachtwagen from "../../../assets/Machines/vrachtwagen.jpg";
import offerte from "../../../assets/offerte.jpg";
import {useHistory, Link} from "react-router-dom";
import styles from "./RequestForm.module.css"
import {useFormContext} from "react-hook-form";
import Selector from "../RequestSelectorsComponenten/Selector";
import RequestDatePicker from "../Datepicker/RequestDatePicker";

function RequestForm() {

    const { register, formState: {errors} } = useFormContext();
    const history = useHistory();
    const message = "Dit veld mag niet leeg blijven"

    function redirectMachines() {
        history.push("/machines")
    }

    function redirectJobs() {
        history.push("/diensten")
    }

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

                    <RequestDatePicker/>

                </div>

                <div>

                    <RequestDatePicker/>

                </div>

            </div>

        </div>
    )
}

export default RequestForm;