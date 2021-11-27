import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../Quote/QuoteComponent.module.css";

function QuoteComponent() {

    const {quote_id} = useParams();
    const [quoteContent, setQuoteContent] = useState(null);
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(()=>{

        async function getQuoteContent() {

            try {

                const quoteResult = await axios.get(`http://localhost:8080/quotes/${quote_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setQuoteContent(quoteResult.data);

            }catch (error) {

                console.error(error)}

        }

        getQuoteContent();

    }, [])

    async function confirmQuote() {

        try {

            await axios.put(`http://localhost:8080/quotes/${quote_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : quoteContent.id,
                    date : quoteContent.date,
                    description : quoteContent.description,
                    status : "CONFIRMED",
                    userDataId : quoteContent.userData.id

                })

        }catch (error) {

            console.error(error)}

        history.push(`/quotes`)

    }

    async function finishQuote() {

        try {

            await axios.put(`http://localhost:8080/quotes/${quote_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : quoteContent.id,
                    date : quoteContent.date,
                    description : quoteContent.description,
                    status : "FINISHED",
                    userDataId : quoteContent.userData.id

                })

        }catch (error) {

            console.error(error)}

        history.push(`/quotes`)

    }

    async function cancelQuote() {

        try {

             await axios.put(`http://localhost:8080/quotes/${quote_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id : quoteContent.id,
                    date : quoteContent.date,
                    description : quoteContent.description,
                    status : "CANCELED",
                    userDataId : quoteContent.userData.id

                })

        }catch (error) {

            console.error(error)}

        history.push(`/quotes`)

    }

    async function deleteQuote() {

        try {

             await axios.delete(`http://localhost:8080/quotes/${quote_id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                })

        }catch (error) {

            console.error(error)}

        history.push(`/quotes`)

    }

    return(

        <>

            {quoteContent != null &&

                <div className={styles["pagewrapper"]}>

                    <h1>Verzoek van : {quoteContent.userData.userFirstname} {quoteContent.userData.userLastname}</h1>

                    <p>Status van verzoek : {quoteContent.status}</p>

                    <div className={styles["request-component"]}>

                        <p> Verzochte offerte datum : </p>

                        <p> {quoteContent.date.slice(8, 10)}
                            -{quoteContent.date.slice(5, 7)}
                            -{quoteContent.date.slice(0, 4)}
                        </p>

                    </div>

                    <p>Beschrijving situatie :</p>

                    <p>{quoteContent.description}</p>

                    {quoteContent.picture != null &&

                    <>

                        <div className={styles["picter-name"]}>

                            <img className={styles["picture"]}
                                 alt={quoteContent.picture.name}
                                 src={`data:image/jpeg;base64,${quoteContent.picture.data}`}
                            />

                        </div>
                    </>
                    }
                    {quoteContent.status === "PLANNED" ?

                        <>

                            <button className={styles["confirm_button"]} onClick={confirmQuote} >Bevestig</button>

                            <button className={styles["cancel_button"]} onClick={cancelQuote} >Annuleer</button>

                        </>

                        :

                        quoteContent.status === "CONFIRMED" ?

                            <>

                                <button className={styles["finished_button"]} onClick={finishQuote} >Klaar</button>

                                <button className={styles["cancel_button"]} onClick={cancelQuote} >Annuleer</button>

                            </>

                            :

                            quoteContent.status === "CANCELED" ?

                                <button className={styles["delete_button"]} onClick={deleteQuote} >Verwijder</button>

                                :

                            <>

                            </>

                    }
                </div>
            }




        </>

    )
}
export default QuoteComponent;