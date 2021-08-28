import React, {useContext, useEffect, useState} from "react";
import styles from "./NewMachineForm.module.css"
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {Controller, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Upload from "../../Upload/Upload";
import {PictureContext} from "../../../Context/PictureContext";
import {forkJoin, map} from "rxjs";


function NewMachineForm() {
    const { handleSubmit, formState: { errors }, register, control} = useForm();
    const message = "Dit veld mag niet leeg blijven"
    const { file } = useContext(PictureContext);
    const history = useHistory();
    const token = localStorage.getItem("token");

    async function onSubmit(machine) {
       forkJoin([
           uploadMachine(machine),
           uploadPicture()
       ]).pipe(map(([machine, picture]) => {
           assignPictureToMachine(machine.data.id, picture.data.message)
       })).subscribe();
    };

    function uploadMachine(machine) {
        return axios.post("http://localhost:8080/machines",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    name: machine.machine_name,
                    type: machine.machine_type,
                    description: machine.machine_description,
                    lastService: machine.machine_last_service,
                    plannedService: machine.machine_planned_service,
                    measurements: machine.machine_measurements,

                })
    }

    function uploadPicture() {
        let formData = new FormData();
        formData.append("file", file);
        return  axios.post("http://localhost:8080/pictures/upload", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                    file: formData
                })

    }

    async function assignPictureToMachine(machineId, pictureId){
        try {
            const result = await axios.put(`http://localhost:8080/machines/machine/${machineId}/picture`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    id: pictureId,

                })

        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div >

            <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
                className={styles['new-machine-form']}
            >

                <h2 className={styles['new-machine']}>Nieuwe Machine</h2>

                    <label htmlFor="machine_name">
                        Machine naam :
                    </label>

                    <div>
                        <input
                            id="machine_name"
                            placeholder="naam van de machine"
                            {...register("machine_name", {required: { value:true, message: message}})}
                        />{errors.machine_name && <p>{errors.machine_name.message}</p>}
                    </div>

                    <label htmlFor="machine_description">
                        Omschrijving :
                    </label>

                    <div>
                        <input
                            id="machine_description"
                            placeholder="omschrijving van de machine"
                            {...register("machine_description", {required: { value:true, message: message}})}
                        />{errors.machine_description && <p>{errors.machine_description.message}</p>}
                    </div>

                    <label htmlFor="machine_type">
                        Soortmachine :
                    </label>

                    <div>
                        <input
                            id="machine_type"
                            placeholder="soort machine"
                            {...register("machine_type", {required: { value:true, message: message}})}
                        />{errors.machine_type && <p>{errors.machine_type.message}</p>}
                    </div>

                    <label htmlFor="machine_measurements">
                        Afmetingen :
                    </label>

                    <div>
                        <input
                            id="machine_measurements"
                            placeholder="afmetingen"
                            {...register("machine_measurements", {required: { value:true, message: message}})}
                        />{errors.machine_measurements && <p>{errors.machine_measurements.message}</p>}
                    </div>

                    <label htmlFor="machine_last_service">
                        Laatste onderhoudsdatum :
                    </label>

                    <Controller
                        control={control}
                        name= "machine_last_service"
                        render={({field}) => (
                            <DatePicker
                                placeholderText="Kies uw datum"
                                onChange={(date)=> field.onChange(date)}
                                selected={field.value}
                                dateFormat = "dd/ MM/ yyyy"
                                minDate={new Date()}
                                required
                            />
                        )}
                    />

                    <label htmlFor="machine_planned_service">
                        Gepland onderhoud op :
                    </label>

                    <Controller
                        control={control}
                        name= "machine_planned_service"
                        render={({field}) => (
                            <DatePicker
                                placeholderText="Kies uw datum"
                                onChange={(date)=> field.onChange(date)}
                                selected={field.value}
                                dateFormat = "dd/ MM/ yyyy"
                                minDate={new Date()}
                                required
                            />
                        )}
                    />

                <Upload/>

                <SaveButton type="submit"/>

            </form>

        </div>

    )
}

export default NewMachineForm;