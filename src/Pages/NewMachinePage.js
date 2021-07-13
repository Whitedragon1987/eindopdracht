import React from "react";
import SaveButton from "../componenten/Buttons/SaveButton/SaveButton";
import {useForm} from "react-hook-form";


function NewMachinePage() {
    const { handleSubmit, formState: { errors }, register} = useForm();
    const message = "Dit veld mag niet leeg blijven"


    function onSubmit(data) {
        console.log(data)
    }
    console.log()

    return (
        <>
            <div id="pageWrapper">

                <h1>Nieuwe Machine</h1>

                <br/>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div id="formWrapper">

                    <label htmlFor="name">
                        Machine naam :
                    </label>

                        <div>
                            <input
                            type="text"
                            id="name"
                            placeholder="naam van de machine"
                            {...register("name", {required: { value:true, message: message}})}
                            />{errors.name && <p>{errors.name.message}</p>}
                        </div>



                    <label htmlFor="description">
                        Omschrijving :
                    </label>

                        <div>
                            <input
                                type="text"
                                id="description"
                                placeholder="omschrijving van de machine"
                                {...register("description", {required: { value:true, message: message}})}
                            />{errors.description && <p>{errors.description.message}</p>}
                        </div>


                    <label htmlFor="type">
                        Soortmachine :
                    </label>

                        <div>
                            <input
                                type="text"
                                id="type"
                                placeholder="soort machine"
                                {...register("type", {required: { value:true, message: message}})}
                            />{errors.type && <p>{errors.type.message}</p>}
                        </div>


                    <label htmlFor="measurements">
                        Afmetingen :
                    </label>

                        <div>
                            <input
                                type="text"
                                id="measurements"
                                placeholder="afmetingen"
                                {...register("measurements", {required: { value:true, message: message}})}
                            />{errors.measurements && <p>{errors.measurements.message}</p>}
                        </div>


                    <label htmlFor="dateOfPurchase">
                        Aankoopdatum :
                    </label>

                        <div>
                            <input
                                type="text"
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
                                type="text"
                                id="priceOfPurchase"
                                placeholder="aankoopprijs"
                                {...register("priceOfPurchase", {required: { value:true, message: message}})}
                            />{errors.priceOfPurchase && <p>{errors.priceOfPurchase.message}</p>}
                        </div>

                    <label htmlFor="lastCheckUp">
                        Laatste onderhoudsdatum :
                    </label>

                    <input
                        type="text"
                        id="lastCheckUp"
                        {...register("lastCheckUp", {required: { value:true, message: message}})}
                    />

                    <label htmlFor="plannedCheckUp">
                        Gepland onderhoud op :
                    </label>

                    <input
                        type="text"
                        id="plannedCheckUp"
                        {...register("plannedCheckUp", {required: { value:true, message: message}})}
                    />

                    </div>

                    <br/>

                    <SaveButton type="submit"/>

               </form>

            </div>
        </>
    )
}

export default NewMachinePage;