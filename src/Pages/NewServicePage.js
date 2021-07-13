import React from "react";
import SaveButton from "../componenten/SaveButton";
import {useForm} from "react-hook-form";
import stylesheetNewServicePage from "../css/stylesheetNewServicePage.css"

function NewServicePage() {
    const{ handleSubmit, register} = useForm();

    function onRequestSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    return (
        <>
            <div id="pageWrapper">
                <h1>Nieuwe Karwei</h1>

                <form onSubmit={onRequestSubmit} >

                    <div id="formWrapper">
                        <label htmlFor="name">
                            Klusnaam :
                        </label>

                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                        />

                        <label htmlFor="description">
                            Omschrijving :
                        </label>

                        <input
                            type="text"
                            id="description"
                            {...register("description")}
                        />

                        <label htmlFor="serviceDate">
                            Datum van Karwei:
                        </label>

                        <input
                            type="text"
                            id="serviceDate"
                            {...register("serviceDate")}
                        />

                        <label htmlFor="serviceTime">
                            Starttijd van Karwei :
                        </label>

                        <input
                            type="text"
                            id="serviceTime"
                            {...register("serviceTime")}
                        />

                        <label htmlFor="machineNeeded">
                            Machine nodig?
                        </label>

                        <input
                            type="checkbox"
                            name="machineNeeded"
                            id="machineNeeded"
                        />

                        <label htmlFor="machineName">
                            Naam van machine :
                        </label>

                        <input
                            type="text"
                            id="machineName"
                            {...register("machineName")}
                        />

                        <label htmlFor="statusMachine">
                            Status van de machine :
                        </label>

                        <input
                            type="text"
                            id="statusMachine"
                            {...register("statusMachine")}
                        />

                        <label htmlFor="employeesNeeded">
                            Medewerker(s) nodig?
                        </label>

                        <input
                            type="checkbox"
                            name="employeesNeeded"
                            id="employeesNeeded"
                        />

                        <label htmlFor="employeeName">
                            Medewerker :
                        </label>

                        <input
                            type="text"
                            id="employeeName"
                            {...register("employee")}
                        />

                        <label htmlFor="statusEmployee">
                            Status van de medewerker :
                        </label>

                        <input
                            type="text"
                            id="statusEmployee"
                            {...register("statusEmployee")}
                        />


                        <br/>

                    </div>

                    <SaveButton type="submit"/>

                </form>
            </div>
        </>
    )
}

export default NewServicePage;