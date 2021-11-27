import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./RequestComponent.module.css"

function RequestComponent() {

    const {request_id} = useParams();
    const [requestContent, setRequestContent] = useState(null);
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(()=>{

        async function getRequestContent() {

            try {

                const requestResult = await axios.get(`http://localhost:8080/requests/${request_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

            }

            });
console.log(requestResult.data)
                setRequestContent(requestResult.data);

            }catch (error) {

                console.error(error)}

        }

        getRequestContent();

        }, [])

    async function confirmRequest() {

        try {

            await axios.put(`http://localhost:8080/requests/${request_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : requestContent.id,
                    confirmedStartTime : requestContent.requestStartTime,
                    confirmedEndTime : requestContent.requestEndTime,
                    requestStartTime : requestContent.requestStartTime,
                    requestEndTime : requestContent.requestEndTime,
                    status : "CONFIRMED",
                    userDataId : requestContent.userData.id

                })

        }catch (error) {

            console.error(error)}

         history.push(`/requests`)

    }

    async function cancelRequest() {

        try {

            await axios.put(`http://localhost:8080/requests/${request_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : requestContent.id,
                    requestStartTime : requestContent.requestStartTime,
                    requestEndTime : requestContent.requestEndTime,
                    status : "CANCELED",
                    userDataId : requestContent.userData.id

                })

        }catch (error) {

            console.error(error)}

        history.push(`/requests`)

    }

    async function finishRequest() {

        try {

            await axios.put(`http://localhost:8080/requests/${request_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : requestContent.id,
                    requestStartTime : requestContent.requestStartTime,
                    requestEndTime : requestContent.requestEndTime,
                    confirmedStartTime : requestContent.requestStartTime,
                    confirmedEndTime : requestContent.requestEndTime,
                    status : "FINISHED",
                    userDataId : requestContent.userData.id

                })

        }catch (error) {

            console.error(error)}

        history.push(`/requests`)

    }

    return(
        <>

            {requestContent != null &&

                <div className={styles["pagewrapper"]}>

                    <h1>Verzoek van : {requestContent.userData.userFirstname} {requestContent.userData.userLastname}</h1>

                    <p>Status van verzoek : {requestContent.status}</p>

                    {requestContent.requestJobs != null &&

                        requestContent.requestJobs.map((requestJob) => {

                            return(

                                requestJob.job.employee ?

                                    <p>Werknemer nodig voor {requestJob.job.jobName} : {requestJob.job.employee.name}</p>


                                    :<></>)
                        })

                    }

                    <div className={styles["request-component"]}>

                        <p> Start datum verzoek : </p>

                        <p> {requestContent.requestStartTime.slice(8, 10)}
                            -{requestContent.requestStartTime.slice(5, 7)}
                            -{requestContent.requestStartTime.slice(0, 4)}
                        </p>

                        <p> Verzoek start-tijd : </p>

                        <p> {requestContent.requestEndTime.slice(11, 16)}</p>

                        <p> Eind datum verzoek : </p>

                        <p> {requestContent.requestEndTime.slice(8, 10)}
                            -{requestContent.requestEndTime.slice(5, 7)}
                            -{requestContent.requestEndTime.slice(0, 4)}
                        </p>

                        <p> Verzoek eind-tijd: </p>

                        <p> {requestContent.requestEndTime.slice(11, 16)}</p>

                        <p> Aantal machine verzoeken : </p>

                        <p> {requestContent.requestMachines.length}</p>

                        <p> Aantal diensten verzoeken </p>

                        <p> {requestContent.requestJobs.length}</p>

                    </div>

                    {requestContent.requestMachines !== 0 &&

                       <>
                           <h1>Machines : </h1>

                           <div className={styles["picture-wrapper"]}>

                               { requestContent.requestMachines.map((machine)=> {

                                   if(machine.machine.picture != null){

                                       return (

                                           <div className={styles["picture-name"]}>

                                               <img className={styles["picture"]}
                                                    alt={machine.machine.picture.name}
                                                    src={`data:image/jpeg;base64,${machine.machine.picture.data}`}
                                               />

                                               <p>{machine.machine.machineName}</p>

                                           </div>

                                       );

                                   } else {

                                       return(

                                       <div className={styles["machine-name"]}>

                                           <p>{machine.machine.machineName}</p>

                                       </div>

                                       )

                                   }


                               })}

                           </div>

                       </>

                    }

                    {requestContent.requestJobs !== 0 &&

                        <>

                            <h1>Diensten : </h1>

                            <div className={styles["picture-wrapper"]}>

                                { requestContent.requestJobs.map((job)=> {

                                    if(job.job.picture != null){

                                        return (

                                            <div className={styles["picter-name"]}>

                                                <img className={styles["picture"]}
                                                     alt={job.job.picture.name}
                                                     src={`data:image/jpeg;base64,${job.job.picture.data}`}
                                                />

                                                <p>{job.job.jobName}</p>

                                            </div>

                                        );

                                    } else {

                                        return(

                                        <div className={styles["job-name"]}>

                                            <p>{job.job.jobName}</p>

                                        </div>

                                        )

                                    }

                                })}

                            </div>

                        </>


                    }

                    {requestContent.status === "PLANNED" ?

                        <>

                            <button className={styles["confirm_button"]} onClick={confirmRequest} >Bevestig</button>

                            <button className={styles["cancel_button"]} onClick={cancelRequest} >Annuleer</button>

                        </>

                        :

                        requestContent.status === "CONFIRMED" ?

                            <>

                                <button className={styles["finished_button"]} onClick={finishRequest} >Klaar</button>

                                <button className={styles["cancel_button"]} onClick={cancelRequest} >Annuleer</button>


                            </>

                            :

                            <></>

                    }

                </div>

            }

        </>

    )

}

export default RequestComponent;
