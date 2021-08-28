import styles from "./Quote.module.css";
import Upload from "../../Upload/Upload";
import SendButton from "../../Buttons/SendButton/SendButton";
import PrivateContent from "../../CustomerDataPageComponents/PrivateContent/PrivateContent";
import React, {useContext, useState} from "react";
import axios from "axios";
import {useFormContext, Controller} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";
import DatePicker from "react-datepicker";

function Quote(){
    const { register, formState: {errors}, handleSubmit, control } = useFormContext();
    const message = "Dit veld mag niet leeg blijven";
    const history = useHistory();
    const { user } = useContext(AuthContext);
    // const [date, setDate] = useState(new Date());

    async function onSubmit() {
        const token = localStorage.getItem("token")

        try {
            const result = await axios.get("http://localhost:8080/quotes/1001",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
            console.log(result.data)
        } catch (error){
            console.error(error);
        }
    }
    return(
        <>

            <form className={styles['quote-wrapper']} onSubmit={handleSubmit(onSubmit)}>

                <h1>Voor wie mogen wij een offerte aanbieden?</h1>

                <PrivateContent/>

                <div className={styles['preference-wrapper']}>

                    <label htmlFor="quote_preference">
                        Voorkeursdatum :
                    </label>

                    <Controller
                        control={control}
                        name= "quote_preference"
                        render={({field}) => (
                            <DatePicker
                                placeholderText="Kies uw datum"
                                onChange={(date)=> field.onChange(date)}
                                selected={field.value}
                                dateFormat = "dd/ MM/ yyyy"
                                minDate={new Date()}
                                required
                            />
                        )}
                        />

                </div>

                <label htmlFor="quote-discription">
                    Omschrijving :
                </label>

                <div>
                    <textarea
                        className={styles['input-description']}
                        id="quote-discription"
                        {...register("quote-description", {
                            required: {value: true, message: "geef aub een beschrijving voor de offerte"}
                        })}
                    />
                    {errors.quote_description && <p>{errors.quote_description.message}</p>}
                </div>


                {/*<Upload/>*/}

                <SendButton/>

            </form>

        </>
    )
}

export default Quote;