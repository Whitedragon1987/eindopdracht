import {useHistory} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from "../QuotesComponent/QuotesComponent.module.css"

function QuotesComponent({quote_id},{key}){

    const token = localStorage.getItem("token");
    const [quote, setQuote] = useState(null);
    const history = useHistory();

    useEffect( () =>{

        async function getQuoteContent() {

            try {

                const result = await axios.get(`http://localhost:8080/quotes/${quote_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setQuote(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        getQuoteContent();

    },[]);

    function redirect() {

        history.push(`/quote/${quote_id}`)

    }

    return(

        <>

            {quote != null ?

                <div className={styles["component-wrapper"]}
                     onClick={ () => redirect()}
                     key={key}>

                    <h1 key={quote_id}>Verzoek van : {quote.userData.userFirstname} {quote.userData.userLastname}</h1>

                    <p>Status van offerte : {quote.status}</p>

                    <div className={styles["data-wrapper"]}>

                        <p>Datum offerte : {quote.date.slice(8, 10)}-{quote.date.slice(5, 7)}-{quote.date.slice(0, 4)} </p>

                        <p>Omshrijving situatie :</p>

                        <p>{quote.description}</p>

                    </div>

                </div>

                :

                <p>loading ...</p>

            }

        </>

    )

}

export default QuotesComponent;