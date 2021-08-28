import React, {useEffect, useState} from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import styles from "./MachineComponent.module.css"
import axios from "axios";
import moment from "moment";
import {useParams} from "react-router-dom";

function MachineComponent() {
    const {machine_id} = useParams();

    const [machineContent, setMachineContent] = useState({});

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
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMachineContent();
    }, [machine_id]);

    return(
        <>
            <div className={styles["pagewrapper"]}>

                    <div className={styles['machine-component']}>

                        <h1 >Naam :</h1>
                        <p>{machineContent.name}</p>

                        <h1>Omschrijving :</h1>
                        <p>{machineContent.description}</p>

                        <h1>Soort :</h1>
                        <p>{machineContent.type}</p>

                        <h1>Afmetingen :</h1>
                        <p>{machineContent.measurements}</p>

                        <h1>Laatste onderhoud :</h1>
                        <p>{moment(machineContent.lastService).format('DD-MM-YYYY')}</p>

                        <h1>Gepland onderhoud :</h1>
                        <p>{moment(machineContent.plannedService).format('DD-MM-YYYY')}</p>

                    </div>


            </div>

        </>

    )
}

export default MachineComponent;