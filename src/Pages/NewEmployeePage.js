import React from "react";
import SaveButton from "../componenten/Buttons/SaveButton/SaveButton";
import {useForm} from "react-hook-form";

function NewEmployeePage() {
    const{ handleSubmit, register} = useForm();

    function onRequestSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    return (
        <>
            <div id="pageWrapper">
                <h2>Wat kunnen wij betekenen voor u?</h2>
                <form onSubmit={onRequestSubmit}>
                    <div id="formWrapper">
                        <label htmlFor="firstname">
                            voornaam :
                        </label>

                        <input
                            type="text"
                            id="firstname"
                            {...register("firstname")}
                        />

                        <label htmlFor="lastname">
                            achternaam :
                        </label>

                        <input
                            type="text"
                            id="lastname"
                            {...register("lastname")}
                        />

                        <label htmlFor="adres">
                            adres :
                        </label>

                        <input
                            type="text"
                            id="adres"
                            {...register("adres")}
                        />

                        <label htmlFor="zipcode">
                            postcode :
                        </label>

                        <input
                            type="text"
                            id="zipcode"
                            {...register("zipcode")}
                        />

                        <label htmlFor="city">
                            woonplaats :
                        </label>

                        <input
                            type="text"
                            id="city"
                            {...register("city")}
                        />

                        <label htmlFor="emailadress">
                            emailadres :
                        </label>

                        <input
                            type="text"
                            id="emailadress"
                            {...register("emailadress")}
                        />

                        <label htmlFor="phonenumber">
                            telefoonnummer :
                        </label>

                        <input
                            type="text"
                            id="phonenumber"
                            {...register("phonenumber")}
                        />

                        <label htmlFor="cityServiceNumber">
                            burgerservicenummer :
                        </label>

                        <input
                            type="text"
                            id="cityServiceNumber"
                            {...register("cityServiceNumber")}
                        />

                        <label htmlFor="ibanNumber">
                            Iban-nummer :
                        </label>

                        <input
                            type="text"
                            id="ibanNumber"
                            {...register("ibanNumber")}
                        />

                        <label htmlFor="dayOfBirth">
                            geboortedatum :
                        </label>

                        <input
                            type="text"
                            id="dayOfBirth"
                            {...register("dayOfBirth")}
                        />

                        <label htmlFor="dateOfEmployment">
                            datum in dienst :
                        </label>

                        <input
                            type="text"
                            id="dateOfEmployment"
                            {...register("dateOfEmployment")}
                        />

                        <label htmlFor="employeeNumber">
                            personeelsnummer :
                        </label>

                        <input
                            type="text"
                            id="employeeNumber"
                            {...register("employeeNumber")}
                        />

                    </div>

                    <br/>

                    <SaveButton type="submit"/>

                </form>
            </div>
        </>
    )
}

export default NewEmployeePage;