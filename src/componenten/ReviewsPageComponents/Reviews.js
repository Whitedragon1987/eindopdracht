import React, {useEffect, useState} from "react";
import axios from "axios";
import ReviewsComponent from "./ReviewsComponents/ReviewsComponent";

function Reviews() {
    const [reviews, setReviews] = useState(null);

    useEffect(()=> {
        const token = localStorage.getItem("token")
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

// console.log(machines)
    return(
        <>

            {reviews?

                <div className="machine-component">

                    { reviews.map((review)=> {

                        return (

                            <ReviewsComponent
                                key={review.id}
                                review_id={review.id}
                            />);

                    })}

                </div>

                :

                <h1>loading...</h1>

            }

        </>

    )

}
export default Reviews;