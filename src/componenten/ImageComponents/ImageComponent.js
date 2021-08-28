import React from "react";
import kraan from "../../assets/Machines/kraan.jpg";
import styles from "./ImageComponent.module.css"

function ImageComponent() {
    return(
        <div className={styles['image-component']}>
            <img
                alt="machineImage" src={kraan} id="kraan"
            />
        </div>
    )
}

export default ImageComponent