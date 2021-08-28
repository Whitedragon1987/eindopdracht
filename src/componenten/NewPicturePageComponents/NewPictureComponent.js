import Upload from "../Upload/Upload";
import styles from "./NewPictureComponent.module.css"
import {useForm} from "react-hook-form";
import React, {useContext} from "react";
import {PictureContext} from "../../Context/PictureContext";
import axios from "axios";
import SaveButton from "../Buttons/SaveButton/SaveButton";
import {useHistory} from "react-router-dom";

function NewPictureComponent() {
    const { handleSubmit } = useForm();
    const { file, setFile } = useContext(PictureContext);
    const token = localStorage.getItem("token");
    const history = useHistory();

    async function onSubmit() {
        let formData = new FormData();
        formData.append("file", file);
        try {
            const result = await axios.post("http://localhost:8080/pictures/upload", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                    file: formData
                })
            setTimeout(() => {
                history.push('/pictures');
            }, 200);
        } catch (error) {
            console.error(error);
        }

    }

    return(

        <div className={styles["pagewrapper"]}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Upload/>

                <div className={styles["button"]}>

                    <SaveButton type="submit" />

                </div>

            </form>

        </div>
    )
}

export default NewPictureComponent;