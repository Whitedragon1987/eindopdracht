import RequestForm from "../RequestForm/RequestForm";
import CustomerDataForm from "../../CustomerDataPageComponents/CustomerDataForm/CustomerDataForm";
import SendButton from "../../Buttons/SendButton/SendButton";
import {useFormContext} from "react-hook-form";
import styles from "./Request.module.css";
import React from "react";
import CompanyData from "../../CustomerDataPageComponents/CompanyData/CompanyData";
import AlternateAddress from "../AlternateAddress/AlternateAddress";
import PrivateContent from "../../CustomerDataPageComponents/PrivateContent/PrivateContent";

function Request() {

    const { watch, handleSubmit, register } = useFormContext();
    const selectAltAddress = watch("altAddress");
    const data = {};

    function onSubmit(data) {
        // data.preventDefault();
        // console.log(data);
    }
    return(
        <>
            <div className= {styles['request-wrapper']}>
                <div >

                    <form  onSubmit={handleSubmit(onSubmit)}>

                        <div>

                            <h2>Wat kunnen wij betekenen voor u?</h2>

                            <RequestForm/>

                            <h2>Waar en voor wie kunnen wij dit betekenen?</h2>

                            <PrivateContent/>



                            <div className={styles['alt-address']}>
                                <label htmlFor="altAddress">
                                Alternatief adres?
                                </label>

                                <input
                                    type="checkbox"
                                    name="altAddress"
                                    id="altAddress"
                                    {...register("altAddress")}
                                />

                            </div>

                            {selectAltAddress&& (
                                <AlternateAddress/>
                            )}

                            <SendButton type="submit" id="saveButton"/>

                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Request;