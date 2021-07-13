import React from "react";
import {useForm} from "react-hook-form";
import styles from "./CustomerDataForm.module.css";


function CustomerDataForm() {

    const { register} = useForm();

    return(
        <>
            <div className={styles['customer-data-form']}>

                <label htmlFor="firstname">
                    voornaam :
                </label>

                <input
                    type="text"
                    id="firstname"
                    {...register("firsname")}
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

                <label htmlFor="alternateAdress">
                    Ander lever adres?
                </label>

                <input
                    type="checkbox"
                    name="alternateAdress"
                    id="alternateAdress"
                />

                <label htmlFor="altFirstname">
                    voornaam :
                </label>

                <input
                    type="text"
                    id="altFirstname"
                    {...register("altFirsname")}
                />

                <label htmlFor="altLastname">
                    achternaam :
                </label>

                <input
                    type="text"
                    id="altLastname"
                    {...register("altLastname")}
                />

                <label htmlFor="altAdres">
                    adres :
                </label>

                <input
                    type="text"
                    id="altAdres"
                    {...register("altAdres")}
                />

                <label htmlFor="altZipcode">
                    postcode :
                </label>

                <input
                    type="text"
                    id="altZipcode"
                    {...register("altZipcode")}
                />

                <label htmlFor="altCity">
                    woonplaats :
                </label>

                <input
                    type="text"
                    id="altCity"
                    {...register("altCity")}
                />

            </div>

        </>
    )
}

export default CustomerDataForm;