import React, {useEffect, useState} from "react";
import styles from "./MachineComponent.module.css"
import axios from "axios";
import moment from "moment";
import {useParams} from "react-router-dom";

function MachineComponent() {
    const {machine_id} = useParams();
    const [machineContent, setMachineContent] = useState({});
    const [urlContent, setUrlContent] = useState({});
    const token = localStorage.getItem("token");

    useEffect(()=> {

        async function getMachineContent() {

            try {

                const machineResult = await axios.get(`http://localhost:8080/machines/${machine_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setMachineContent(machineResult.data);

            } catch (error) {

                console.error(error);

            }

        }

        getMachineContent();

    }, [machine_id]);

    useEffect(()=> {

        async function getPictureContent() {

            try {

                const pictureResult = await axios.get(`http://localhost:8080/pictures/${machineContent.picture.id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        },

                        responseType: "blob",

                    });

                setUrlContent(pictureResult.config.url)

            }catch (error) {

                console.error(error);

            }

        }

        getPictureContent();

    }, [machineContent])

    return(

        <>

            <div className={styles["pagewrapper"]} >

                    <div className={styles['machine-component']} >

                        <h1 > Naam : </h1>

                        <p> {machineContent.name} </p>

                        <h1> Omschrijving : </h1>

                        <p> {machineContent.description} </p>

                        <h1> Soort : </h1>

                        <p> {machineContent.type} </p>

                        <h1> Afmetingen : </h1>

                        <p> {machineContent.measurements} </p>

                        <h1> Laatste onderhoud : </h1>

                        <p> {moment(machineContent.lastService).format('DD-MM-YYYY')} </p>

                        <h1> Gepland onderhoud : </h1>

                        <p> {moment(machineContent.plannedService).format('DD-MM-YYYY')} </p>

                    </div>

                {machineContent.picture != null ?

                    <div className={styles["image"]} >

                        <img alt={machineContent.name}
                             src={urlContent} />

                    </div>

                    :

                    <p> Geen afbeelding aanwezig! </p>

                }

            </div>

        </>

    )

}

export default MachineComponent;