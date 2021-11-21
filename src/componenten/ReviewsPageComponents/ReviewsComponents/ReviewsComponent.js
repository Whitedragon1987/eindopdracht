import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./ReviewsComponent.module.css"
import RatingReadOnly from "../../ReviewPageComponents/RatingComponents/RatingReadOnly/RatingReadOnly";
function ReviewsComponent({review_id}) {

    const [urlContent, setUrlContent] = useState({});
    const [reviewContent, setReviewContent] = useState({});
    const token = localStorage.getItem("token");

    useEffect(()=> {

        async function getReviewContent() {

            try {

                const result = await axios.get(`http://localhost:8080/reviews/${review_id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        }

                    });

                setReviewContent(result.data);

            } catch (error) {

                console.error(error);

            }

        }

        getReviewContent();

        }, [review_id, token]);

    useEffect(()=> {

        async function getPictureContent() {

            try {

                const pictureResult = await axios.get(`http://localhost:8080/pictures/${reviewContent.picture.id}`,

                    {

                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        },

                        responseType: "blob",

                    });

                setUrlContent(pictureResult.config.url)

            }catch (error) {

                console.error(error);

            }

        }

        getPictureContent();

    }, [reviewContent, token])

    return(

        <>

            <div className={styles["component-wrapper"]} >

                <div className={styles["imagewrapper"]} >

                    {reviewContent.picture != null ?

                        <div className={styles["image"]} >

                            <img alt={reviewContent.name}
                                 src={urlContent} />

                        </div>

                        :

                        <p>Geen afbeelding aanwezig!</p>

                    }


                    <div className={styles["data-container"]} >

                        <div className={styles['data-wrapper']} >

                            <h1> Naam : </h1>

                            <p> {reviewContent.name} </p>

                            <h1> Review : </h1>

                            <p> {reviewContent.description} </p>

                        </div>

                        <RatingReadOnly rating={reviewContent.value} />

                    </div>

                </div>

            </div>

        </>

    )

}

export default ReviewsComponent;