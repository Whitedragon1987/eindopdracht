import styles from "./Upload.module.css"
import {PictureContext} from "../../Context/PictureContext";
import {useContext} from "react";
import axios from "axios";

function Upload() {

    const { file, setFile, url, setUrl } = useContext(PictureContext);



    const handleImageChange = (e) => {

        let reader = new FileReader();

        let file = e.target.files[0];

        reader.onloadend = () => {

            setFile(file);

            setUrl(reader.result)

        }

        reader.readAsDataURL(file)

    }
    
    return(
        <div className={styles["previewComponent"]}>

            {/*<form onSubmit={handleSubmit()} className={styles["wrapper"]}>*/}

                <input className={styles["fileInput"]}
                       type="file"
                       onChange={handleImageChange}
                />

                {/*<button className={styles["submitButton"]}*/}
                {/*        type="submit"*/}
                {/*        onClick={handleSubmit()}>*/}
                {/*    Upload Image*/}
                {/*</button>*/}

            {/*</form>*/}

            <div className={styles["imgPreview"]}>

                {url !== null ?

                    <img src={url} alt="image" />:

                    <div className={styles["previewText"]}> Selecteer a.u.b. een afbeelding</div>}

            </div>

        </div>
    )
}

export default Upload;