import styles from "./Preview.module.css"
import RatingReadOnly from "../../ReviewPageComponents/RatingComponents/RatingReadOnly/RatingReadOnly";

function Preview({pic, title, name, descr, rating}) {

    return(

        <>

            <div className={styles["preview"]} >

                <img className={styles["pic"]}
                     src={`data:image/jpeg;base64,${pic}`}
                     alt={title} />

                <div className={styles["description"]} >

                    <p> {name} </p>

                    <p> {descr} </p>

                </div>

                <RatingReadOnly rating={rating} />

            </div>

        </>

    )

}

export default Preview;