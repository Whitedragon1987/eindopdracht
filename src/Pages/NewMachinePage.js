import React from "react";
import SaveButton from "../componenten/SaveButton";
import {useForm} from "react-hook-form";
import stylesheetNewMachinePage from "../css/stylesheetNewMachinePage.css"

function NewMachinePage() {
    const{ handleSubmit, register} = useForm();

    function onRequestSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    return (
        <>
            <div id="pageWrapper">

                <h1>Nieuwe Machine</h1>

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

                    <label htmlFor="type">
                        Soortmachine :
                    </label>

                    <input
                        type="text"
                        id="type"
                        {...register("type")}
                    />

                    <label htmlFor="measurements">
                        Afmetingen :
                    </label>

                    <input
                    type="text"
                    id="measurements"
                    {...register("measurements")}
                    />

                    <label htmlFor="dateOfPurchase">
                        Aankoopdatum :
                    </label>

                    <input
                    type="text"
                    id="dateOfPurchase"
                    {...register("dateOfPurchase")}
                    />


                    <label htmlFor="priceOfPurchase">
                        Aankoopbedrag :
                    </label>

                    <input
                        type="text"
                        id="priceOfPurchase"
                        {...register("priceOfPurchase")}
                    />

                   <label htmlFor="valueOfDate">
                        Dagwaarde :
                   </label>
                    <input
                        type="text"
                        id="valueOfDate"
                        {...register("valueOfDate")}
                    />

                    <label htmlFor="status">
                        Status :
                    </label>

                    <input
                        type="text"
                        id="status"
                        {...register("status")}
                    />

                    <label htmlFor="lastCheckUp">
                        Laatste onderhoudsdatum :
                    </label>

                    <input
                        type="text"
                        id="lastCheckUp"
                        {...register("lastCheckUp")}
                    />

                    <label htmlFor="plannedCheckUp">
                        Gepland onderhoud op :
                    </label>

                    <input
                        type="text"
                        id="plannedCheckUp"
                        {...register("plannedCheckUp")}
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