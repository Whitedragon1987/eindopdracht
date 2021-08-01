import React from "react";
import styles from "./CustomerDataForm.module.css";
import {useFormContext} from "react-hook-form";


function CustomerDataForm() {

    const { register, watch, formState: {errors} } = useFormContext();
    const selectAlternateAddress = watch("alternateAddress-customer");
    const message = "Dit veld mag niet leeg blijven"

    return(
        <>
            <div >

                <div className={styles['customer-data-form']}>

                    <label htmlFor="firstname">
                        voornaam :
                    </label>

                    <input
                        id="firstname"
                        {...register("firstnameCustomer", {required: {value: true, message: message }})}
                    />{errors.firstnameCustomer && <p>{errors.firstnameCustomer.message}</p>}

                    <label htmlFor="lastname">
                        achternaam :
                    </label>

                    <input
                        id="lastname"
                        {...register("lastnameCustomer", {required: {value: true, message: message }})}
                    />{errors.lastnameCustomer && <p>{errors.lastnameCustomer.message}</p>}

                    <label htmlFor="address">
                        adres :
                    </label>

                    <input
                        id="address"
                        {...register("addressCustomer", {required: {value: true, message: message, }})}
                    />{errors.addressCustomer?.type === "required" && <p>{errors.addressCustomer.message}</p>}

                    <label htmlFor="zipcode">
                        postcode :
                    </label>

                    <input
                        id="zipcode"
                        {...register("zipcodeCustomer", {required: {value: true, message: message }})}
                    />{errors.zipcodeCustomer && <p>{errors.zipcodeCustomer.message}</p>}

                    <label htmlFor="city">
                        woonplaats :
                    </label>

                    <input
                        id="city"
                        {...register("cityCustomer", {required: {value: true, message: message }})}
                    />{errors.cityCustomer && <p>{errors.cityCustomer.message}</p>}

                    <label htmlFor="emailaddress">
                        emailadres :
                    </label>

                    <input
                        id="emailaddress"
                        {...register("emailaddressCustomer", {required: {value: true, message: message }})}
                    />{errors.emailaddressCustomer && <p>{errors.emailaddressCustomer.message}</p>}

                    <label htmlFor="phonenumber">
                        telefoonnummer :
                    </label>

                    <input
                        id="phonenumber"
                        {...register("phonenumberCustomer", {required: {value: true, message: message }})}
                    />{errors.phonenumberCustomer && <p>{errors.phonenumberCustomer.message}</p>}

                    <label htmlFor="alternateAddress">
                        Ander lever adres?
                    </label>

                    <input
                        type="checkbox"
                        name="alternateAddress"
                        id="alternateAddress"
                        {...register("alternateAddress-customer")}
                    />

                </div>


                {selectAlternateAddress && (
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

                </div>)}

            </div>

        </>
    )
}

export default CustomerDataForm;