import {useEffect, useState} from "react";
import axios from "axios";
import ReviewsComponent from "./ReviewsComponents/ReviewsComponent";
import {NavLink} from "react-router-dom";

function Reviews() {

    const [reviews, setReviews] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(()=> {

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

    },[]);

    return(

        <>

            {reviews?

                <div className="machine-component" >

                    { reviews.map((review)=> {

                        return (

                            <ReviewsComponent key={review.id}
                                              review_id={review.id} />);

                    })}

                </div>

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

export default Reviews;