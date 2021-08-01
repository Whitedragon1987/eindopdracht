import React from "react";
import styles from "./NewMachineForm.module.css"
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {useFormContext} from "react-hook-form";

function NewMachineForm() {
    const { handleSubmit, formState: { errors }, register} = useFormContext();
    const message = "Dit veld mag niet leeg blijven"


    function onSubmit(e) {
        e.preventDefault();
    }

    return(
        <div id="pageWrapper">

            <h2 className={styles['new-machine']}>Nieuwe Machine</h2>

            <br/>

            <form onSubmit={handleSubmit(onSubmit)} >

                <div className={styles['new-machine-form']} id="formWrapper">

                    <label htmlFor="name">
                        Machine naam :
                    </label>

                    <div>
                        <input
                            id="name"
                            placeholder="naam van de machine"
                            {...register("machineName", {required: { value:true, message: message}})}
                        />{errors.machineName && <p>{errors.machineName.message}</p>}
                    </div>



                    <label htmlFor="description">
                        Omschrijving :
                    </label>

                    <div>
                        <input
                            id="description"
                            placeholder="omschrijving van de machine"
                            {...register("machineDescription", {required: { value:true, message: message}})}
                        />{errors.machineDescription && <p>{errors.machineDescription.message}</p>}
                    </div>


                    <label htmlFor="type">
                        Soortmachine :
                    </label>

                    <div>
                        <input
                            id="type"
                            placeholder="soort machine"
                            {...register("machineType", {required: { value:true, message: message}})}
                        />{errors.machineType && <p>{errors.machineType.message}</p>}
                    </div>


                    <label htmlFor="measurements">
                        Afmetingen :
                    </label>

                    <div>
                        <input
                            id="measurements"
                            placeholder="afmetingen"
                            {...register("measurementsMachine", {required: { value:true, message: message}})}
                        />{errors.measurementsMachine && <p>{errors.measurementsMachine.message}</p>}
                    </div>


                    <label htmlFor="dateOfPurchase">
                        Aankoopdatum :
                    </label>

                    <div>
                        <input
                            id="dateOfPurchase"
                            placeholder="aankoopdatum"
                            {...register("dateOfPurchase", {required: { value:true, message: message}})}
                        />{errors.dateOfPurchase && <p>{errors.dateOfPurchase.message}</p>}
                    </div>


                    <label htmlFor="priceOfPurchase">
                        Aankoopbedrag :
                    </label>

                    <div>
                        <input
                            id="priceOfPurchase"
                            placeholder="aankoopprijs"
                            {...register("priceOfPurchase", {required: { value:true, message: message}})}
                        />{errors.priceOfPurchase && <p>{errors.priceOfPurchase.message}</p>}
                    </div>

                    <label htmlFor="lastCheckUp">
                        Laatste onderhoudsdatum :
                    </label>

                    <input
                        id="lastCheckUp"
                        {...register("lastCheckUp", {required: { value:true, message: message}})}
                    />{errors.lastCheckUp && <p>{errors.lastCheckUp.message}</p>}

                    <label htmlFor="plannedCheckUp">
                        Gepland onderhoud op :
                    </label>

                    <input
                        id="plannedCheckUp"
                        {...register("plannedCheckUp", {required: { value:true, message: message}})}
                    />{errors.plannedCheckUp && <p>{errors.plannedCheckUp.message}</p>}

                </div>

                <br/>

                <SaveButton type="submit"/>

            </form>

        </div>
    )
}

export default NewMachineForm;