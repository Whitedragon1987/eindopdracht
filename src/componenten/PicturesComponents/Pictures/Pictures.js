import axios from "axios";
import {useEffect, useState} from "react";
import PicturesComponent from "../PicturesComponent/PicturesComponent";
import styles from "./Pictures.module.css"

function Pictures() {
    const [pictures, setPictures] = useState(null);

    useEffect(()=> {
        const token = localStorage.getItem("token")
        async function fetchPictures() {
            try {
                const result = await axios.get(`http://localhost:8080/pictures`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setPictures(result.data);
                console.log(result.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPictures();
    },[]);

// console.log(pictures)
    return(
        <>

            {pictures?

                <div className={styles["picture-component"]}>

                    { pictures.map((picture)=> {
                        // console.log(picture)
                        return (
                            <PicturesComponent
                                name={picture.name}
                                url={picture.url}
                                size={picture.size}
                            />);

                        })}

                </div>

                :

                <h1>loading...</h1>

            }

        </>

    )

}
export default Pictures;