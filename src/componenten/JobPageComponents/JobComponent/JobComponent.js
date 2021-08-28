import React, {useEffect, useState} from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import styles from "./JobComponent.module.css"
import {useParams} from "react-router-dom";
import axios from "axios";

function JobComponent() {

    const {job_id} = useParams();

    const [jobContent, setJobContent] = useState({});

    useEffect(()=> {
        const token = localStorage.getItem("token");

        async function getJobContent() {
            try {
                const result = await axios.get(`http://localhost:8080/jobs/${job_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                setJobContent(result.data);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getJobContent();
    }, [job_id]);


    return(
        <div className={styles['pagewrapper']}>

               <div className={styles['job-component']}>

                <h1>Naam : </h1>
                <p> {jobContent.name}</p>

                <h1>Omschrijving :</h1>
                <p> {jobContent.description}</p>

               </div>

        </div>
    )
}

export default JobComponent;