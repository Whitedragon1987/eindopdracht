import React from "react";
import SaveButton from "../componenten/Buttons/SaveButton/SaveButton";
import {useForm} from "react-hook-form";

function NewServicePage() {
    const { handleSubmit, register, watch, formState: {errors}} = useForm();
    const selectMachineNeeded = watch("machineNeeded");
    const selectEmployeeNeeded = watch("employeesNeeded")

    function onRequestSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    console.log(selectMachineNeeded)

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
                            {...register("name", { required: true})}
                        />

                        <label htmlFor="description">
                            Omschrijving :
                        </label>

                        <input
                            type="text"
                            id="description"
                            {...register("description", { required: true})}
                        />

                        <label htmlFor="serviceDate">
                            Datum van Karwei:
                        </label>

                        <input
                            type="text"
                            id="serviceDate"
                            {...register("serviceDate", { required: true})}
                        />

                        <label htmlFor="serviceStartTime">
                            Starttijd van Karwei :
                        </label>

                        <input
                            type="text"
                            id="serviceStartTime"
                            {...register("serviceStartTime", { required: true})}
                        />

                        <label htmlFor="machineNeeded">
                            Machine(s) nodig?
                        </label>

                        <input
                            type="checkbox"
                            name="machineNeeded"
                            id="machineNeeded"
                            {...register("machineNeeded")}
                        />

                        <label htmlFor="employeesNeeded">
                        Medewerker(s) nodig?
                        </label>

                        <input
                            type="checkbox"
                            name="employeesNeeded"
                            id="employeesNeeded"
                            {...register("employeesNeeded")}
                        />
                    </div>

                    <br/>

                    {selectMachineNeeded && (
                        <div id="machineNeededWrapper">
                            <label htmlFor="machineName">
                                Naam van machine :
                            </label>

                            <input
                                type="text"
                                id="machineName"
                                {...register("machineName")}
                            />
                        </div> )}

                    <br/>

                    {selectEmployeeNeeded &&(
                        <div id="employeeWrapper">
                            <label htmlFor="employeeName">
                                Medewerker :
                            </label>

                            <input
                                type="text"
                                id="employeeName"
                                {...register("employee")}
                            />
                        </div>)}




                    <div>
                        {/*<label htmlFor="statusMachine">*/}
                        {/*     Status van de machine :*/}
                        {/* </label>*/}

                        {/* <input*/}
                        {/*     type="text"*/}
                        {/*     id="statusMachine"*/}
                        {/*     {...register("statusMachine")}*/}
                        {/* />*/}

                        {/*<label htmlFor="statusEmployee">*/}
                        {/*    Status van de medewerker :*/}
                        {/*</label>*/}

                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    id="statusEmployee"*/}
                        {/*    {...register("statusEmployee")}*/}
                        {/*/>*/}


                        <br/>

                    </div>

                    <SaveButton type="submit"/>

                </form>
            </div>
        </>

    )
}

export default NewServicePage;