import axios from "axios";
import {useEffect, useState} from "react";

function EmployeesOptions() {

    const [employees, setEmployees] = useState(null);
    const token = localStorage.getItem("token");

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

        <div id="employeeWrapper" >

            <label htmlFor="employeeName" >

                Medewerkers :

           </label>


           <select>

               {employees && employees.map((employee) => {

                  return (

                      <option key={employee.id}
                              value={employee.id} >

                          {employee.name}

                      </option>
                  )

              })}

         </select>

        </div>

    )

}

export default EmployeesOptions;