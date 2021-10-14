import styles from "./Upload.module.css"

function Upload({file, setFile, url, setUrl}) {

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

        <div className={styles["previewComponent"]} >

            <input className={styles["fileInput"]}
                   type="file"
                   onChange={handleImageChange} />

            <div className={styles["imgPreview"]} >

                {url !== null ?

                    <img src={url}
                         alt="image" />

                    :

                    <div className={styles["previewText"]} >

                        Selecteer a.u.b. een afbeelding

                    </div>}

            </div>

        </div>

    )

}

export default Upload;