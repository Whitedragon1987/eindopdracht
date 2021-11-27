import axios from "axios";
import {useEffect, useState} from "react";
import QuotesComponent from "../QuotesComponent/QuotesComponent";

function Quotes() {

    const [quotes, setQuotes] = useState(null);
    const token = localStorage.getItem("token");

    useEffect( () =>{

        async function fetchQuotes(){

            try{

                const result = await axios.get(`http://localhost:8080/quotes`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setQuotes(result.data)

            } catch (error){

                console.error(error);

            }

        }

        fetchQuotes();

    }, []);

    return(

        <>

            {quotes != null ?

                <div className="requests-component">

                    {quotes.map((quote) => {

                        return(

                            <QuotesComponent key={quote.id}
                                             quote_id={quote.id}/>);

                    })}

                </div>

                :

                <h1> loading... </h1>

            }

        </>

    )
}

export default Quotes;