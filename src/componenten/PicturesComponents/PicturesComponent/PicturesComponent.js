
import styles from "./PicturesComponent.module.css"

function PicturesComponent({name, url}) {

    return(

        <>

            <div
                className={styles["component-wrapper"]} >

                <div
                    className={styles['data-wrapper']} >

                    <img
                        className={styles["picture"]}
                        alt={name}
                        src={url} />

                </div>

            </div>

        </>

    )

}

export default PicturesComponent;