import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import styles from"./RequestsComponent.module.css"

function RequestsComponent({request_id},{key}) {

    const token = localStorage.getItem("token");
    const [request, setRequest] = useState(null);
    const history = useHistory();

    useEffect( () =>{

        async function getRequestContent() {

            try {

                const result = await axios.get(`http://localhost:8080/requests/${request_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setRequest(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        getRequestContent();

        },[]);

    function redirect() {

        history.push(`/request/${request_id}`)

    }

   return(

        <>

            {request != null ?

                <div className={styles["component-wrapper"]}
                     onClick={ () => redirect()}
                     key={key}>

                    <h1 key={request_id}>Verzoek van : {request.userData.userFirstname} {request.userData.userLastname}</h1>

                    <p>Status van verzoek : {request.status}</p>

                    {request.requestJobs != null &&

                        request.requestJobs.map((job) => {

                            return(

                            job.job.employee &&

                            <p key={job.job.id}>Werknemer nodig voor {job.job.jobName} : {job.job.employee.name}</p>

                            )

                    })}


                    <div className={styles["data-wrapper"]}>

                        <p> Start datum verzoek : {request.requestStartTime.slice(8, 10)}
                            -{request.requestStartTime.slice(5, 7)}
                            -{request.requestStartTime.slice(0, 4)}
                        </p>

                        <p> Eind datum verzoek : {request.requestEndTime.slice(8, 10)}
                            -{request.requestEndTime.slice(5, 7)}
                            -{request.requestEndTime.slice(0, 4)}
                        </p>

                        <p>Aantal machine verzoeken {request.requestMachines.length}</p>

                        <p>Aantal diensten verzoeken {request.requestJobs.length}</p>

                    </div>

                </div>

                :

                <p>loading ...</p>

            }

        </>

    )

}

export default RequestsComponent;
