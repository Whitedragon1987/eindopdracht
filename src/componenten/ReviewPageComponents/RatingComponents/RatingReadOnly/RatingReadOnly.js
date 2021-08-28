import {useState} from "react";
import {GiMonsteraLeaf} from "react-icons/gi";
import styles from "./RatingReadOnly.module.css";

function RatingReadOnly({rating}) {


    return(
        <div>
            {[...Array(5)].map((leaf, i) => {
                const ratingValue = i + 1;
                return(
                    <label>
                        <GiMonsteraLeaf className={styles['leaf']}
                                        color={ratingValue <= (rating) ? "#008000" : "#e4e5e9"}

                        />
                    </label>
                )})}

        </div>
    )
}

export default RatingReadOnly;