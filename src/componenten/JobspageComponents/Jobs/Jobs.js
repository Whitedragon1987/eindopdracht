import React, {useEffect, useState} from "react";
import axios from "axios";
import JobsComponent from "../JobsComponents/JobsComponent";

function Jobs() {

    const [jobs, setJobs] = useState(null);
    const token = localStorage.getItem("token")

    useEffect(()=> {

        async function fetchJobs() {

            try {

                const result = await axios.get(`http://localhost:8080/jobs`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setJobs(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchJobs();

        },[]);

    return(

        <>

            {jobs?

                <div
                    className="job-component" >

                    { jobs.map((job)=> {

                        return (
                            <JobsComponent
                                key={job.id}
                                job_id={job.id} />
                        );

                    })}

                </div>

                :

                <h1> loading... </h1>

            }

        </>

    )

}

export default Jobs;