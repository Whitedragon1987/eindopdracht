import styles from "./Quote.module.css";
import Upload from "../../Upload/Upload";
import SendButton from "../../Buttons/SendButton/SendButton";
import PrivateContent from "../../CustomerDataPageComponents/PrivateContent/PrivateContent";
import {useContext, useState} from "react";
import axios from "axios";
import { Controller, useForm} from "react-hook-form";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";
import DatePicker from "react-datepicker";
import {forkJoin, map} from "rxjs";

function Quote(){

    const { register, formState: {errors}, handleSubmit, control } = useForm();
    const [file, setFile] = useState({});
    const [url, setUrl] = useState({});
    const message = "Dit veld mag niet leeg blijven";
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token")
    const history = useHistory();

    async function onSubmit(quote) {

        if(file.type == null){

            await uploadQuoteOnly(quote);

        } else {

            forkJoin([

                uploadQuote(quote),
                uploadPicture()

            ]).pipe(map(([quote, picture, ]) => {

                assignPictureToQuote(quote.data.id, picture.data.message)

            })).subscribe();

        }

    }

    function uploadQuote(quote) {

       return   axios({
           method: 'POST',
           url: 'http://localhost:8080/quotes',
           headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
           },
           data: {
               description: quote.description,
               date: quote.preference,
               userDataId: user.id,
           }
       })

    }

    function uploadPicture() {

        let formData = new FormData();

        formData.append("file", file);

        return  axios.post("http://localhost:8080/pictures/upload", formData,

            {

                headers: {

                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,

                },

                file: formData

            })

    }

    async function assignPictureToQuote(quote, pictureId){

        try {

            await
                axios({

                    method: 'POST',
                    url: `http://localhost:8080/quotes/quote/${quote}/picture`,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    data: {

                        id: pictureId,

                    }

                })

        } catch (error) {

            console.error(error);

        }

        history.push(`/`)

    }

    async function uploadQuoteOnly(quote) {

        try {

            axios({

                method: 'POST',
                url: 'http://localhost:8080/quotes',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },

                data: {

                    description: quote.description,
                    date: quote.preference,
                    userDataId: user.id,

                }

            })

        } catch (error) {

            console.error(error);
        }

        history.push(`/`)
    }

    return(

        <>
            {user != null ?

                <form className={styles['quote-wrapper']}
                      onSubmit={handleSubmit(onSubmit)} >

                    <h1> Voor wie mogen wij een offerte aanbieden? </h1>

                    <PrivateContent/>

                    <div className={styles['preference-wrapper']} >

                        <label htmlFor="preference" >

                            Voorkeursdatum :

                        </label>

                        <Controller control={control}
                                    name= "preference"
                                    render={({field}) => (

                                        <DatePicker

                                            placeholderText="Kies uw datum"
                                            onChange={(date)=> field.onChange(date)}
                                            selected={field.value}
                                            dateFormat = "dd/ MM/ yyyy"
                                            minDate={new Date()}
                                            required />

                                    )}

                        />

                    </div>

                    <label htmlFor="description" >

                        Omschrijving :

                    </label>

                    <textarea id="description"
                              {...register("description",
                                  {required: {value: true, message: message }})} />

                    {errors.description && <p> {errors.description.message} </p>}


                    <Upload file={file}
                            setFile={setFile}
                            url={url}
                            setUrl={setUrl} />

                    <SendButton type="submit" />

                </form>

                :

                <>

                    <h1> Om deze content te zien moet u zijn ingelogd </h1>

                    <p>

                        <NavLink to="/login">Log hier in</NavLink>

                    </p>

                    <p>

                        <NavLink to="/signup">Schrijf u hier in</NavLink>

                    </p>

                </>

            }


        </>

    )

}

export default Quote;