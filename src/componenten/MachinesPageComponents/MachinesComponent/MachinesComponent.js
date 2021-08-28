import React, {useEffect, useState} from "react";
import styles from "./MachinesComponent.module.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

function MachinesComponent({machine_id}) {


    const [machineContent, setMachineContent] = useState({});
    const history = useHistory();

    useEffect(()=> {
        const token = localStorage.getItem("token");

        async function getMachineContent() {
            try {
                const result = await axios.get(`http://localhost:8080/machines/${machine_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                setMachineContent(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMachineContent();
    }, [machine_id]);

    function redirect() {
        history.push(`/machine/${machine_id}`)
    }

    return(
        <>
            <div className={styles["component-wrapper"]}
                 onClick={ () => redirect()}
            >

                <div className={styles['data-wrapper']}>

                        <h1>Naam :</h1>
                        <p>{machineContent.name}</p>

                        <h1>Omschrijving :</h1>
                        <p>{machineContent.description}</p>

                        <h1>Soort :</h1>
                        <p>{machineContent.type}</p>

                        <h1>Afmetingen :</h1>
                        <p>{machineContent.measurements}</p>


                    <label htmlFor="addMachine">
                        Selecteer deze machine voor uw verzoek.
                    </label>

                        <input
                        type="checkbox"
                        name="alternateAdress"
                        id="addMachine"
                        />

                </div>

            </div>

        </>
    )
}

export default MachinesComponent;