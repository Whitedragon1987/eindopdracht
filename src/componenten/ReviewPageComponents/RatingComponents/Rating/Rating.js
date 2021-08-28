import {GiMonsteraLeaf} from "react-icons/gi";
import styles from "./Rating.module.css";
import {useState} from "react";

function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
        <div>
            {[...Array(5)].map((leaf, i) => {
                const ratingValue = i + 1;
                return(
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}

                    />
                    <GiMonsteraLeaf className={styles['leaf']}
                                    color={ratingValue <= (hover || rating) ? "#008000" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            )})}

        </div>
    )
}

export default Rating;