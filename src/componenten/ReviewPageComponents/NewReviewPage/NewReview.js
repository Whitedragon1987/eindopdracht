import styles from "./NewReview.module.css"
import Rating from "../RatingComponents/Rating/Rating";
import Upload from "../../Upload/Upload";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import SendButton from "../../Buttons/SendButton/SendButton";

function NewReview() {

    return (
        <>
            <div className={styles['review']} >
                <h1> Laat hier uw review achter</h1>
                <Rating/>
                <h1>Beschrijf hier uw ervaring</h1>
                <input className={styles["input"]}/>
                <h1>Laat hier eventueel een foto van het geleverde werk achter</h1>
                <Upload/>
                <SendButton/>
            </div>
        </>
    )
}
export default NewReview;