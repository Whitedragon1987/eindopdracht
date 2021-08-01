import React from "react";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import styles from "./NewEmployeeForm.module.css";
import {useFormContext} from "react-hook-form";

function NewEmployeeForm() {
    const{ register, formState: { errors }, handleSubmit } = useFormContext();
    const message = "dit veld mag niet leeg blijven"

    function onRequestSubmit(e) {
        e.preventDefault();
    }

    return(
        <div id="pageWrapper">

            <h2>Nieuwe medewerker</h2>

            <form onSubmit={handleSubmit(onRequestSubmit)}>

                <div className={styles['new-employee-form']} id="formWrapper">

                    <label htmlFor="firstname">
                        voornaam :
                    </label>

                    <input
                        id="firstname"
                        {...register("firstname", {required: {value: true, message: message }})}
                    />{errors.firstname && <p>{errors.firstname.message}</p>}

                    <label htmlFor="lastname">
                        achternaam :
                    </label>

                    <input
                        id="lastname"
                        {...register("lastname", {required: {value: true, message: message }})}
                    />{errors.lastname && <p>{errors.lastname.message}</p>}

                    <label htmlFor="address">
                        adres :
                    </label>

                    <input
                        id="address"
                        {...register("address", {required: {value: true, message: message }})}
                    />{errors.address && <p>{errors.address.message}</p>}

                    <label htmlFor="zipcode">
                        postcode :
                    </label>

                    <input
                        id="zipcode"
                        {...register("zipcode", {required: {value: true, message: message }})}
                    />{errors.zipcode && <p>{errors.zipcode.message}</p>}

                    <label htmlFor="city">
                        woonplaats :
                    </label>

                    <input
                        id="city"
                        {...register("city", {required: {value: true, message: message }})}
                    />{errors.city && <p>{errors.city.message}</p>}

                    <label htmlFor="emailaddress">
                        emailadres :
                    </label>

                    <input
                        id="emailadress"
                        {...register("emailaddress", {required: {value: true, message: message }})}
                    />{errors.emailaddress && <p>{errors.emailaddress.message}</p>}

                    <label htmlFor="phonenumber">
                        telefoonnummer :
                    </label>

                    <input
                        id="phonenumber"
                        {...register("phonenumber", {required: {value: true, message: message }})}
                    />{errors.phonenumber && <p>{errors.phonenumber.message}</p>}

                    <label htmlFor="cityServiceNumber">
                        burgerservicenummer :
                    </label>

                    <input
                        id="cityServiceNumber"
                        {...register("cityServiceNumber", {required: {value: true, message: message }})}
                    />{errors.cityServiceNumber && <p>{errors.cityServiceNumber.message}</p>}

                    <label htmlFor="ibanNumber">
                        Iban-nummer :
                    </label>

                    <input
                        id="ibanNumber"
                        {...register("ibanNumber", {required: {value: true, message: message }})}
                    />{errors.ibanNumber && <p>{errors.ibanNumber.message}</p>}

                    <label htmlFor="dayOfBirth">
                        geboortedatum :
                    </label>

                    <input
                        id="dayOfBirth"
                        {...register("dayOfBirth", {required: {value: true, message: message }})}
                    />{errors.dayOfBirth && <p>{errors.dayOfBirth.message}</p>}

                    <label htmlFor="dateOfEmployment">
                        datum in dienst :
                    </label>

                    <input
                        id="dateOfEmployment"
                        {...register("dateOfEmployment", {required: {value: true, message: message }})}
                    />{errors.dateOfEmployment && <p>{errors.dateOfEmployment.message}</p>}

                    <label htmlFor="employeeNumber">
                        personeelsnummer :
                    </label>

                    <input
                        id="employeeNumber"
                        {...register("employeeNumber")}
                    />

                </div>

                <br/>

                <SaveButton type="submit"/>

            </form>

        </div>

    )

}

export default NewEmployeeForm;