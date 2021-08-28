import React, {useEffect, useState} from "react";
import styles from "./EmployeesComponent.module.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

function EmployeesComponent({employee_id}) {


    const [employeeContent, setEmployeeContent] = useState({});
    const history = useHistory();

    useEffect(()=> {
        const token = localStorage.getItem("token");

        async function getEmployeeContent() {
            try {
                const result = await axios.get(`http://localhost:8080/employees/${employee_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                setEmployeeContent(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getEmployeeContent();
    }, [employee_id]);

    function redirect() {
        history.push(`/employees/${employee_id}`)
    }

    return(
        <>
            <div className={styles["component-wrapper"]}
                 onClick={ () => redirect()}
            >

                <div className={styles['data-wrapper']}>

                    <h1>Naam : </h1>
                    <p>{employeeContent.name}</p>

                    <h1>Adres : </h1>
                    <p>{employeeContent.address}</p>

                    <h1>Postcode : </h1>
                    <p>{employeeContent.zipcode}</p>

                    <h1>Woonplaats : </h1>
                    <p>{employeeContent.city}</p>

                    <h1>Telefoon-nummer :</h1>
                    <p>{employeeContent.phoneNumber}</p>

                    <h1>Email- adres : </h1>
                    <p>{employeeContent.emailaddress}</p>

                    <h1>BSN : </h1>
                    <p>{employeeContent.cityServiceNumber}</p>

                    <h1>IBAN : </h1>
                    <p>{employeeContent.ibanNumber}</p>

                </div>

            </div>

        </>
    )
}

export default EmployeesComponent;