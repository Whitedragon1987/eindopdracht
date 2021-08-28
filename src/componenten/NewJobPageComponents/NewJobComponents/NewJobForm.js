import React from "react";
import styles from "./NewJobForm.module.css";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {useFormContext} from "react-hook-form";
import axios from "axios";

function NewJobForm() {
    const { register, watch, formState: {errors}, handleSubmit } = useFormContext();
    const selectEmployeeNeeded = watch("employeesNeeded");
    const message = "dit veld mag niet leeg blijven"

    async function onSubmitJob(job) {
        const token = localStorage.getItem("token");

        try {
            console.log(job)
            const result = await axios.post("http://localhost:8080/jobs",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    name: job.job_name,
                    description: job.job_description,

                })
        } catch (error) {
            console.error(error);
        }
        // console.log(job);
    };

    return (
        <div id="pageWrapper">
            <h2 className={styles['new-job']}>Nieuwe Karwei</h2>

            <form onSubmit={handleSubmit(onSubmitJob)} >

                <div className={styles['new-job-form']} id="formWrapper">
                    <label htmlFor="name">
                        Klusnaam :
                    </label>

                    <input
                        id="name"
                        {...register("job_name", {required: {value: true, message: message }})}
                    />{errors.job_name && <p>{errors.job_name.message}</p>}

                    <label htmlFor="description">
                        Omschrijving :
                    </label>

                    <input
                        id="description"
                        {...register("job_description", {required: {value: true, message: message }})}
                    />{errors.job_description && <p>{errors.job_description.message}</p>}

                    {/*<label htmlFor="employeesNeeded">*/}
                    {/*    Medewerker(s) nodig?*/}
                    {/*</label>*/}

                    {/*<input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="employeesNeeded"*/}
                    {/*    id="employeesNeeded"*/}
                    {/*    {...register("employeesNeeded")}*/}
                    {/*/>*/}
                </div>

                <br/>

                {/*{selectEmployeeNeeded &&(*/}
                {/*    <div className={styles['employee-needed']} id="employeeWrapper">*/}

                {/*        <label htmlFor="employeeName">*/}
                {/*            Medewerker :*/}
                {/*        </label>*/}

                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="employeeName"*/}
                {/*            {...register("employeename")}*/}
                {/*            />*/}

                {/*    </div>)}*/}


                <SaveButton type="submit"/>

            </form>
        </div>
    )
}

export default NewJobForm;