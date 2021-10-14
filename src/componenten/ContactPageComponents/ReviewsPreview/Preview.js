import styles from "./Preview.module.css"
import RatingReadOnly from "../../ReviewPageComponents/RatingComponents/RatingReadOnly/RatingReadOnly";

function Preview({foto, title, naam, omschrijving, rating}) {

    return(

        <>

            <div
                className={styles["preview"]}>

                <img
                    className={styles["pic"]}
                    src={`data:image/jpeg;base64,${foto}`}
                    alt={title} />

                <div
                    className={styles["description"]} >

                    <p>
                        {naam}
                    </p>

                    <p>
                        {omschrijving}
                    </p>

                </div>

                <RatingReadOnly
                    rating={rating} />

            </div>

        </>

    )

}

export default Preview;