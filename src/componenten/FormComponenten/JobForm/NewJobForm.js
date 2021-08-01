import React from "react";
import styles from "./NewJobForm.module.css";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {useFormContext} from "react-hook-form";

function NewJobForm() {
    const { register, watch, formState: {errors}, handleSubmit } = useFormContext();
    const selectEmployeeNeeded = watch("employeesNeeded");
    const message = "dit veld mag niet leeg blijven"

    function onRequestSubmit(e) {
        e.preventDefault();
    }

    return (
        <div id="pageWrapper">
            <h2 className={styles['new-job']}>Nieuwe Karwei</h2>

            <form onSubmit={handleSubmit(onRequestSubmit)} >

                <div className={styles['new-job-form']} id="formWrapper">
                    <label htmlFor="name">
                        Klusnaam :
                    </label>

                    <input
                        id="name"
                        {...register("jobname", {required: {value: true, message: message }})}
                    />{errors.jobname && <p>{errors.jobname.message}</p>}

                    <label htmlFor="description">
                        Omschrijving :
                    </label>

                    <input
                        id="description"
                        {...register("jobdescription", {required: {value: true, message: message }})}
                    />{errors.jobdescription && <p>{errors.jobdescription.message}</p>}

                    <label htmlFor="service-Date">
                        Datum van Karwei:
                    </label>

                    <input
                        id="serviceDate"
                        {...register("serviceStartDate", {required: {value: true, message: message }})}
                    />{errors.serviceStartDate && <p>{errors.serviceStartDate.message}</p>}

                    <label htmlFor="serviceStartTime">
                        Starttijd van Karwei :
                    </label>

                    <input
                        id="serviceStartTime"
                        {...register("serviceStartTime", {required: {value: true, message: message }})}
                    />{errors.serviceStartTime && <p>{errors.serviceStartTime.message}</p>}

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

                {selectEmployeeNeeded &&(
                    <div className={styles['employee-needed']} id="employeeWrapper">

                        <label htmlFor="employeeName">
                            Medewerker :
                        </label>

                        <input
                            type="text"
                            id="employeeName"
                            {...register("employeename")}
                            />

                    </div>)}


                <SaveButton type="submit"/>

            </form>
        </div>
    )
}

export default NewJobForm;