import React from "react";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import styles from "./NewEmployeeForm.module.css";
import {useFormContext} from "react-hook-form";
import axios from "axios";

function NewEmployeeForm() {
    const{ register, formState: { errors }, handleSubmit } = useFormContext();
    const message = "dit veld mag niet leeg blijven"
    const token = localStorage.getItem("token");

    async function onSubmitEmployee(employee) {

        try {

            const result = await axios.post("http://localhost:8080/employees",

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    name : employee.name,
                    address : employee.address,
                    zipcode : employee.zipcode,
                    city : employee.city,
                    phoneNumber : employee.phonenumber,
                    emailaddress : employee.emailaddress,
                    cityServiceNumber : employee.cityServiceNumber,
                    ibanNumber : employee.ibanNumber,

                })

        } catch (error) {

            console.error(error);

        }

    };

    return(

        <div
            id="pageWrapper" >

            <h2
                className={styles['new-employee']} >

                Nieuwe medewerker

            </h2>

            <form
                onSubmit={handleSubmit(onSubmitEmployee)} >

                <div
                    className={styles['new-employee-form']} >

                    <label
                        htmlFor="firstname" >

                        voornaam :

                    </label>

                    <input
                        id="name"
                        {...register("name",
                            {required: {value: true, message: message }})} />
                    {errors.name && <p> {errors.name.message} </p>}

                    <label
                        htmlFor="address" >

                        adres :

                    </label>

                    <input
                        id="address"
                        {...register("address",
                            {required: {value: true, message: message }})} />
                    {errors.address && <p> {errors.address.message} </p>}

                    <label
                        htmlFor="zipcode" >

                        postcode :

                    </label>

                    <input
                        id="zipcode"
                        {...register("zipcode",
                            {required: {value: true, message: message }})} />
                    {errors.zipcode && <p> {errors.zipcode.message} </p>}

                    <label
                        htmlFor="city" >

                        woonplaats :

                    </label>

                    <input
                        id="city"
                        {...register("city",
                            {required: {value: true, message: message }})} />
                    {errors.city && <p> {errors.city.message} </p>}

                    <label
                        htmlFor="emailaddress" >

                        emailadres :

                    </label>

                    <input
                        id="emailadress"
                        {...register("emailaddress",
                            {required: {value: true, message: message }})} />
                    {errors.emailaddress && <p> {errors.emailaddress.message} </p>}

                    <label
                        htmlFor="phonenumber" >

                        telefoonnummer :

                    </label>

                    <input
                        id="phonenumber"
                        {...register("phonenumber",
                            {required: {value: true, message: message }})} />
                    {errors.phonenumber && <p> {errors.phonenumber.message} </p>}

                    <label
                        htmlFor="cityServiceNumber" >

                        burgerservicenummer :

                    </label>

                    <input
                        id="cityServiceNumber"
                        {...register("cityServiceNumber",
                            {required: {value: true, message: message }})} />
                    {errors.cityServiceNumber && <p> {errors.cityServiceNumber.message} </p>}

                    <label
                        htmlFor="ibanNumber" >

                        Iban-nummer :

                    </label>

                    <input
                        id="ibanNumber"
                        {...register("ibanNumber",
                            {required: {value: true, message: message }})} />
                    {errors.ibanNumber && <p> {errors.ibanNumber.message} </p>}

                    <SaveButton
                        type="submit" />

                </div>

            </form>

        </div>

    )

}

export default NewEmployeeForm;