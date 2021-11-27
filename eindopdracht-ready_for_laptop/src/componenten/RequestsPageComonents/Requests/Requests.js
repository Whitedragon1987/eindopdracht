import axios from "axios";
import {useEffect, useState} from "react";
import RequestsComponent from "../RequestComponent/RequestsComponent";

function Requests() {

    const [requests, setRequests] = useState(null);
    const token = localStorage.getItem("token");

    useEffect( () =>{

        async function fetchRequests(){

            try{

                const result = await axios.get(`http://localhost:8080/requests`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setRequests(result.data)

            } catch (error){

                console.error(error);

            }

        }

        fetchRequests();

    }, []);

    return(

        <>

            {requests != null ?

                <div className="requests-component">

                    {requests.map((request) => {

                    return(

                        <RequestsComponent key={request.id}
                                           request_id={request.id} />);

                    })}

                </div>

                :

                <h1> loading... </h1>

            }

        </>

    )

}

export default Requests;
