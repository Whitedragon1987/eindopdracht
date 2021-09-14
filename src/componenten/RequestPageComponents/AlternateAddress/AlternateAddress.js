import React from "react";
import {useForm} from "react-hook-form";
import styles from "./AlternateAddress.module.css"
import SendButton from "../../Buttons/SendButton/SendButton";

function AlternateAddress({register, errors}) {
    const message = "Dit veld mag niet leeg blijven"


    return(
        <>

                <div className={styles['alternate-address']}>
                    <label htmlFor="altFirstname">
                        voornaam :
                    </label>

                    <input
                        id="altFirstname"
                        {...register("altFirstnameCustomer", {required: {value: true, message: message }})}
                    />{errors.altFirstnameCustomer && <p>{errors.altFirstnameCustomer.message}</p>}

                    <label htmlFor="altLastname">
                        achternaam :
                    </label>

                    <input
                        id="altLastname"
                        {...register("altLastnameCustomer", {required: {value: true, message: message }})}
                    />{errors.altLastnameCustomer && <p>{errors.altLastnameCustomer.message}</p>}

                    <label htmlFor="altAddress">
                        adres :
                    </label>

                    <input
                        id="altAddress"
                        {...register("altAddressCustomer", {required: {value: true, message: message }})}
                    />{errors.altAddressCustomer && <p>{errors.altAddressCustomer.message}</p>}

                    <label htmlFor="altZipcode">
                        postcode :
                    </label>

                    <input
                        id="altZipcode"
                        {...register("altZipcodeCustomer", {required: {value: true, message: message }})}
                    />{errors.altZipcodeCustomer && <p>{errors.altZipcodeCustomer.message}</p>}

                    <label htmlFor="altCity">
                        woonplaats :
                    </label>

                    <input
                        id="altCity"
                        {...register("altCityCustomer", {required: {value: true, message: message }})}
                    />{errors.altCityCustomer && <p>{errors.altCityCustomer.message}</p>}

                </div>

        </>
    )
}

export default AlternateAddress;