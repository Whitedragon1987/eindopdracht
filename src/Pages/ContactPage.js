import ContactPageComponent from "../componenten/ContactPageComponents/ContactPageComponent";
import {useEffect, useState} from "react";
import axios from "axios";

function ContactPage() {

    const [reviews, setReviews] = useState([]);
    const [pictures, setPictures] = useState([]);
    const token = localStorage.getItem("token")

    useEffect(() => {

        async function fetchReviews() {

            try {

                const result = await axios.get(`http://localhost:8080/reviews`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setReviews(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchReviews();

    }, [token]);

    useEffect(() => {

        async function fetchPictures() {

            try {

                const result = await axios.get(`http://localhost:8080/pictures`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setPictures(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchPictures();

    }, [token]);

    return(

        <>

            <ContactPageComponent
                reviews={reviews}
                setReviews={setReviews}
                pictures={pictures}
                setPictures={setPictures} />

        </>

    )

}

export default ContactPage;