import React, {useEffect, useState} from "react";
import axios from "axios";
import EmployeesComponent from "./EmployeesComponents/EmployeesComponent";

function Employees() {
    const [employees, setEmployees] = useState(null);
    const token = localStorage.getItem("token")

    useEffect(()=> {

        async function fetchEmployees() {

            try {

                const result = await axios.get(`http://localhost:8080/employees`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setEmployees(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchEmployees();

    },[]);

    return(

        <>

            {employees?

                <div className="machine-component" >

                    { employees.map((employee)=> {

                        return (

                            <EmployeesComponent key={employee.id}
                                                employee_id={employee.id} />);

                    })}

                </div>

                :

                <h1> loading... </h1>

            }

        </>

    )

}

export default Employees;