import axios from "axios";
import {useEffect, useState} from "react";
import PicturesComponent from "../PicturesComponent/PicturesComponent";
import styles from "./Pictures.module.css"

function Pictures() {

    const [pictures, setPictures] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(()=> {

        async function fetchPictures() {

            try {

                const result = await axios.get(`http://localhost:8080/pictures`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setPictures(result.data);

            } catch (error) {

                console.error(error);
            }

        }

        fetchPictures();

    },[]);

    return(

        <>

            {pictures?

                <div className={styles["picture-component"]} >

                    { pictures.map((picture)=> {

                        return (

                            <PicturesComponent name={picture.name}
                                               url={picture.url} />);

                        })}

                </div>

                :

                <h1> loading... </h1>

            }

        </>

    )

}

export default Pictures;