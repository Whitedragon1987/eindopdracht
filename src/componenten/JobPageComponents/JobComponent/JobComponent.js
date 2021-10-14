import React, {useEffect, useState} from "react";
import styles from "./JobComponent.module.css"
import {useParams} from "react-router-dom";
import axios from "axios";

function JobComponent() {

    const {job_id} = useParams();
    const [jobContent, setJobContent] = useState({});
    const [pictureContent, setPictureContent] = useState({});
    const [urlContent, setUrlContent] = useState({});
    const token = localStorage.getItem("token");

    useEffect(()=> {

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

            } catch (error) {

                console.error(error);

            }

        }

        getJobContent();

    }, [job_id]);

    useEffect(()=> {

        async function getPictureContent() {

            try {

                const pictureResult = await axios.get(`http://localhost:8080/pictures/${jobContent.picture.id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        },

                        responseType: "blob",

                    });

                setPictureContent(pictureResult)

                setUrlContent(pictureResult.config.url)

            }catch (error) {

                console.error(error);

            }

        }

        getPictureContent();

    }, [jobContent])

    return(

        <div
            className={styles['pagewrapper']} >

               <div
                   className={styles['job-component']} >

                   <h1> Naam : </h1>

                   <p> {jobContent.name} </p>

                   <h1> Omschrijving : </h1>

                   <p> {jobContent.description} </p>

               </div>

            {jobContent.picture != null ?

                <div
                    className={styles["image"]} >

                    <img
                        alt={jobContent.name}
                        src={urlContent} />

                </div>

                :

                <p> Geen afbeelding aanwezig! </p>

            }

        </div>

    )

}

export default JobComponent;