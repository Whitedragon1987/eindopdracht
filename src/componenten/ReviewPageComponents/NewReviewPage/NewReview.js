import styles from "./NewReview.module.css"
import Upload from "../../Upload/Upload";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {GiMonsteraLeaf} from "react-icons/gi";
import {forkJoin, map} from "rxjs";
import axios from "axios";
import {AuthContext} from "../../../Context/AuthContext";

function NewReview() {

    const { register, watch, formState: {errors}, handleSubmit, control } = useForm();
    const message = "dit veld mag niet leeg blijven"
    const history = useHistory();
    const token = localStorage.getItem("token");
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [file, setFile] = useState({});
    const [url, setUrl] = useState({});
    const { user } = useContext(AuthContext);

    async function onSubmit(review){

        forkJoin([

            uploadReview(review),
            uploadPicture()

        ]).pipe(map(([review, picture]) => {

            assignPictureToReview(review.data.id, picture.data.message)

        })).subscribe();

    };

    function uploadReview(review) {

        return axios.post("http://localhost:8080/reviews",

            {

                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },

                value: review.rating,
                description: review.description,
                name: review.name,

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

    async function assignPictureToReview(reviewId, pictureId){

        try {

            const result = await axios.post(`http://localhost:8080/reviews/review/${reviewId}/picture`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id: pictureId,

                })

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <>

            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles['review']} >

                <label htmlFor="rating" >

                    Laat hier uw review achter

                </label>

                <div>

                    {[...Array(5)].map((leaf, i) => {

                        const ratingValue = i + 1;

                        return(

                            <label>

                                <input type="radio"
                                       name="rating"
                                       value={ratingValue}
                                       onClick={() => setRating(ratingValue)}
                                       {...register("rating",
                                           {required: {value: true, message: message}})} />

                                {errors.rating && <p> {errors.rating.message} </p>}

                                <GiMonsteraLeaf className={styles['leaf']}
                                                color={ratingValue <= (hover || rating) ? "#008000" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)} />

                            </label>

                        )})}

                </div>

                <label htmlFor="name" >

                    Laat hier uw naam achter

                </label>

                <input {...register("name",
                    {required: {value: true, message : message}})} />

                {errors.name && <p> {errors.name.message} </p>}

                <label htmlFor="description" >

                    Beschrijf hier uw ervaring

                </label>

                <input className={styles["input"]}
                       {...register("description",
                           {required: {value: true, message : message}})} />

                {errors.description && <p> {errors.description.message} </p>}

                <h1> Laat hier eventueel een foto van het geleverde werk achter </h1>

                <Upload file={file}
                        setFile={setFile}
                        url={url}
                        setUrl={setUrl} />

                <SaveButton type="submit" />

            </form>

        </>

    )

}

export default NewReview;