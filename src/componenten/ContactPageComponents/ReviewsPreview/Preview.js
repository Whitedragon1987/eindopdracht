import styles from "./Preview.module.css"
import RatingReadOnly from "../../ReviewPageComponents/RatingComponents/RatingReadOnly/RatingReadOnly";

function Preview({foto, title, naam, omschrijving, rating}) {

    return(
        <>
            <div className={styles["preview"]}>
                <img className={styles["pic"]} src={foto} alt={title}/>
                <div>
                    <p>{naam}</p>
                    <p>{omschrijving}</p>
                </div>
                <RatingReadOnly rating={rating}/>
            </div>
        </>
    )
}

export default Preview;