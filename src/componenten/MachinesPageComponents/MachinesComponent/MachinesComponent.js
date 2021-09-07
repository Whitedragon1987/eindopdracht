import React, {useEffect, useState} from "react";
import styles from "./MachinesComponent.module.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

function MachinesComponent({machine_id}) {

    const [urlContent, setUrlContent] = useState({});
    const [machineContent, setMachineContent] = useState({});
    const [pictureContent, setPictureContent] = useState({});
    const history = useHistory();
    const token = localStorage.getItem("token");

    useEffect(()=> {
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
                // console.log(pictureResult)
                setPictureContent(pictureResult)
                setUrlContent(pictureResult.config.url)
            }catch (error) {
                console.error(error);
            }
        }
        getPictureContent();
    }, [machineContent])

    function redirect() {
        history.push(`/machine/${machine_id}`)
    }
    // console.log(machineContent)

    return(
        <>

            <div className={styles["component-wrapper"]}
                 onClick={ () => redirect()}
            >

                <div className={styles["imagewrapper"]}>

                    {machineContent.picture != null ?

                        <div className={styles["image"]}>

                            <img alt={machineContent.name} src={urlContent}/>

                        </div>

                        :

                        <p>Geen afbeelding aanwezig!</p>

                    }


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

            </div>

        </>
    )
}

export default MachinesComponent;