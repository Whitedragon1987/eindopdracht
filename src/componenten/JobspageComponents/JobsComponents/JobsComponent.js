import {useEffect, useState} from "react";
import styles from "./JobsComponent.module.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

function JobsComponent({job_id}) {

    const [jobContent, setJobContent] = useState({});
    const [urlContent, setUrlContent] = useState({});
    const history = useHistory();
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

                setUrlContent(pictureResult.config.url)

            }catch (error) {

                console.error(error);

            }

        }

        getPictureContent();

    }, [jobContent])

    function redirect() {

        history.push(`/jobs/${job_id}`)

    }

    return(

        <>

            <div className={styles["component-wrapper"]}
                 onClick={ () => redirect()} >

                <div className={styles["imagewrapper"]} >

                    {jobContent.picture != null ?

                        <div className={styles["image"]} >

                            <img alt={jobContent.name}
                                 src={urlContent} />

                        </div>

                        :

                        <p> Geen afbeelding aanwezig! </p>

                    }

                   <div className={styles['data-wrapper']} >

                        <h1> Naam : </h1>

                        <p> {jobContent.name} </p>

                        <h1> Omschrijving : </h1>

                        <p> {jobContent.description} </p>

                   </div>

                </div>

            </div>

        </>

    )

}

export default JobsComponent;