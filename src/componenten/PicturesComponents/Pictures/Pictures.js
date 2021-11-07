import axios from "axios";
import {useContext, useEffect, useState} from "react";
import PicturesComponent from "../PicturesComponent/PicturesComponent";
import styles from "./Pictures.module.css"
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";

function Pictures() {

    const [pictures, setPictures] = useState(null);
    const token = localStorage.getItem("token");
    const {user} = useContext(AuthContext);

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

            {user != null && pictures ?

                <div className={styles["picture-component"]} >

                    { pictures.map((picture)=> {

                        return (

                            <PicturesComponent name={picture.name}
                                               url={picture.url} />);

                    })}

                </div>

                :

                <>

                    <h1> Om deze content te zien moet u zijn ingelogd </h1>

                    <NavLink to="/login">Log hier in</NavLink>
                </>

            }


        </>

    )

}

export default Pictures;