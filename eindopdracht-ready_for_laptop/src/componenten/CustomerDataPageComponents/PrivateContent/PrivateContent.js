import styles from "./PrivateContent.module.css"
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../Context/AuthContext";
import axios from "axios";

function PrivateContent() {

    const [privateContent, setPrivateContent] = useState({});
    const [userdata, toggleUserdata] = useState(false)
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token");

    useEffect(() => {

        async function getPrivateContent() {

            try {

                const result = await axios.get(`http://localhost:8080/userdata/${user.id}`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                setPrivateContent(result.data);

                toggleUserdata(true);

            } catch (error) {

                console.error(error);

            }

        }


        if(user){

            getPrivateContent();

        }

        },[user.id]);

    return(

        <>
            <div className={styles["pagewrapper"]} >

                {userdata === true &&

                <>
                        <h1>

                            Uw persoonlijke gegevens

                        </h1>

                        <div className={styles["private"]} >

                            <p> Voornaam: </p>

                            <p> {privateContent.userFirstname} </p>

                            <p> Achternaam: </p>

                            <p> {privateContent.userLastname} </p>

                            <p> Adres: </p>

                            <p> {privateContent.userAddress} </p>

                            <p> Postcode: </p>

                            <p> {privateContent.userZipcode} </p>

                            <p> Woonplaats: </p>

                            <p> {privateContent.userCity} </p>

                            <p> Telefoon-nummer: </p>

                            <p> {privateContent.userPhoneNumber} </p>

                        </div>

                    </>

                }

            </div>

        </>

    )

}

export default PrivateContent;