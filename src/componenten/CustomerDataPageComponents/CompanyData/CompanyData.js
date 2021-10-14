import {useFormContext} from "react-hook-form";
import styles from "./CompanyData.module.css";

function CompanyData() {

    const { register, formState: {errors} } = useFormContext();
    const message = "Dit veld mag niet leeg blijven"

    return(

        <>
            <div>

                <div className={styles['alternate-address']} >

                    <label htmlFor="companyName" >

                        bedrijfsnaam :

                    </label>

                    <div className={styles["name"]} >

                        <input id="companyName"
                               {...register("companyName",
                                {required: {value: true, message: message }})} />

                        {errors.companyName && <p> {errors.companyName.message} </p>}

                    </div>

                    <label htmlFor="companyAddress" >

                        adres :

                    </label>

                    <div className={styles["address"]} >

                        <input id="companyAddress"
                               {...register("companyAddress",
                                   {required: {value: true, message: message }})} />

                        {errors.companyAddress && <p> {errors.companyAddress.message} </p>}

                    </div>


                    <label htmlFor="companyZipcode" >

                        postcode :

                    </label>

                    <div className={styles["zipcode"]} >

                        <input id="companyZipcode"
                               {...register("companyZipcode",
                                   {required: {value: true, message: message }})} />

                        {errors.companyZipcode && <p> {errors.companyZipcode.message} </p>}

                    </div>

                    <label htmlFor="companyCity" >

                        woonplaats :

                    </label>

                    <div className={styles["city"]} >

                        <input id="companyCity"
                               {...register("companyCity",
                                   {required: {value: true, message: message }})} />

                        {errors.companyCity && <p> {errors.companyCity.message} </p>}

                    </div>


                    <label htmlFor="companyPhoneNumber" >

                        telefoon-nummer :

                    </label>

                    <div className={styles["phone"]} >

                        <input id="companyPhoneNumber"
                               {...register("companyPhoneNumber",
                                   {required: {value: true, message: message }})} />
                        {errors.companyPhoneNumber && <p> {errors.companyPhoneNumber.message} </p>}

                    </div>


                    <label htmlFor="companyEmail" >

                        e-mail :

                    </label>

                    <div className={styles["email"]} >

                        <input id="companyEmail"
                               {...register("companyEmail",
                                   {required: {value: true, message: message }})} />

                        {errors.companyEmail && <p> {errors.companyEmail.message} </p>}

                    </div>

                </div>

            </div>

        </>

    )

}

export default CompanyData;