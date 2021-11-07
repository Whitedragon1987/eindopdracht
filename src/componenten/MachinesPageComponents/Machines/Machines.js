import MachinesComponent from "../MachinesComponent/MachinesComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";


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

                <>

                    <h1> Om deze content te zien moet u zijn ingelogd </h1>

                    <NavLink to="/login">Log hier in</NavLink>
                </>


        }

        </>

    )

}

export default Machines;