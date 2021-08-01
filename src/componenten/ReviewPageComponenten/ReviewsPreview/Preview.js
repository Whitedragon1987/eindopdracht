import {Rating} from '@material-ui/lab'
import styles from "./Preview.module.css"

function Preview({foto, title, naam, omschrijving, waarde}) {

    return(
        <>
            <div className={styles["preview"]}>
                <img className={styles["pic"]} src={foto} alt={title}/>
                <div>
                    <p>{naam}</p>
                    <p>{omschrijving}</p>
                </div>
                <Rating className={styles["rating"]} name="half-rating-read" value={waarde} precision={0.5} readOnly />
            </div>
        </>
    )
}

export default Preview;