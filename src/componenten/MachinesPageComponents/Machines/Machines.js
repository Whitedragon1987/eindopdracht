import MachinesComponent from "../MachinesComponent/MachinesComponent";
import {useEffect, useState} from "react";
import axios from "axios";


function Machines() {

    const [machines, setMachines] = useState(null);
    const token = localStorage.getItem("token")

    useEffect(()=> {

        async function fetchMachines() {

            try {

                const result = await axios.get(`http://localhost:8080/machines`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setMachines(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchMachines();

        },[]);

    return(

        <>

            {machines?

                <div className="machine-component" >

                    { machines.map((machine)=> {

                        return (

                            <MachinesComponent key={machine.id}
                                               machine_id={machine.id} />);

                    })}

                </div>

            :

                <h1> loading... </h1>

        }

        </>

    )

}

export default Machines;