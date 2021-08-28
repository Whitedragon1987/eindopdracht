import MachinesComponent from "../MachinesComponent/MachinesComponent";
import React, {useEffect, useState} from "react";
import axios from "axios";


function Machines() {
    const [machines, setMachines] = useState(null);

    useEffect(()=> {
        const token = localStorage.getItem("token")
        async function fetchMachines() {
            try {
                const result = await axios.get(`http://localhost:8080/machines`, {
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

// console.log(machines)
    return(
        <>

            {machines?

                <div className="machine-component">

                    { machines.map((machine)=> {

                        return (

                            <MachinesComponent
                                key={machine.id}
                                machine_id={machine.id}
                            />);

                    })}

                </div>

            :

                <h1>loading...</h1>

        }

        </>

    )

}
export default Machines;