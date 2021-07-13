import React from "react";
import { useForm } from "react-hook-form";
import kraan from "../../assets/kraan.jpg";
import vrachtwagen from "../../assets/vrachtwagen.jpg";
import {useHistory} from "react-router-dom";
import styles from "./RequestForm.module.css"

function RequestForm() {

    const { register} = useForm();
    const history = useHistory();

    function redirectMachines() {
        history.push("/machines")
    }

    return(
        <div className={styles['request-form']}>
            <div className={styles['imageTitles']}>

                <h2 htmlFor="MachineDropdown" id="machinesDropdown">Machines</h2>

                <h2 htmlFor="ServicesDropdown" id="servicesDropdown">Diensten</h2>

            </div>

            <br/>

            <div className={styles['images']}>

                <img alt="dropdownMachines" src={kraan} id="kraan" onClick={() => redirectMachines()}/>

                <img alt="dropdownServices" src={vrachtwagen} id="vrachtwagen"/>

            </div>

            <br/>

            <div className={styles['dropdownMenuWrapper']}>

                <label className="dropdownServices">

                    <select>

                        <option> Menu item 1 </option>
                        <option> Menu item 2 </option>
                        <option> Menu item 3 </option>

                    </select>

                </label>

                <label className="dropdownMachines">

                    <select>

                        <option> Menu item 1 </option>
                        <option> Menu item 2 </option>
                        <option> Menu item 3 </option>

                    </select>

                </label>

            </div>

            <h2>Wanneer zou u dit het liefste willen?</h2>

            <br/>

            <div className={styles['preference-wrapper']}>

                <div>

                    <label htmlFor="preferenceDateStart" >
                        Voorkeursdatum start :
                    </label>


                    <input
                        type="text"
                        id="preferenceDateStart"
                        {...register("preferenceDateStart")}
                    />

                </div>

                <div>

                    <label htmlFor="preferenceDateEnd" >
                        Voorkeursdatum eind :
                    </label>

                    <input
                        type="text"
                        id="preferenceDateEnd"
                        {...register("preferenceDateEnd")}
                    />

                </div>

            </div>

        </div>
    )
}

export default RequestForm;