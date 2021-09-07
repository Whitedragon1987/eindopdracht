import styles from "./PrivateContent.module.css"
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../Context/AuthContext";
import axios from "axios";
import CustomerDataForm from "../CustomerDataForm/CustomerDataForm";

function PrivateContent() {
    const [privateContent, setPrivateContent] = useState({});
    const [companyContent, setCompanyContent] = useState({});
    const [userdata, toggleUserdata] = useState(false)

    const { user } = useContext(AuthContext);
    // console.log(user);


    useEffect(() => {
        const token = localStorage.getItem("token");
        async function getPrivateContent() {
            try {
                const result = await axios.get(`http://localhost:8080/userdata/${user.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                // console.log(user.id);
                setPrivateContent(result.data);
                toggleUserdata(true);
            } catch (e) {
                // console.error(error);
            }
        }
        if(user){
            getPrivateContent();
            // console.log(privateContent);
        }
    },[user.id]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        async function getCompanyContent() {
            try {
                const result = await axios.get(`http://localhost:8080/company/company/${user.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                setCompanyContent(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        if(privateContent.hasCompany === true) {
            getCompanyContent();
            // console.log(companyContent);
        }
    },[privateContent]);



    return(
        <>
            <div className={styles["pagewrapper"]}>
                {userdata === true &&
                <>
                        <h1>Uw persoonlijke gegevens</h1>

                        <div className={styles["private"]}>

                            <p>Voornaam: </p>
                            <p>{privateContent.userFirstname}</p>
                            <p>Achternaam: </p>
                            <p>{privateContent.userLastname}</p>
                            <p>Adres: </p>
                            <p>{privateContent.userAddress}</p>
                            <p>Postcode: </p>
                            <p>{privateContent.userZipcode}</p>
                            <p>Woonplaats: </p>
                            <p>{privateContent.userCity}</p>
                            <p>Telefoon-nummer: </p>
                            <p>{privateContent.userPhoneNumber}</p>

                        </div>
                    </>
                }

                {privateContent.hasCompany === true &&
                    <>

                        <h1>Uw bedrijfsgegevens</h1>

                        <div className={styles["company"]}>

                            <p>Bedrijfsnaam: </p>
                            <p>{companyContent.name}</p>
                            <p>Adres: </p>
                            <p>{companyContent.address}</p>
                            <p>Postcode: </p>
                            <p>{companyContent.zipcode}</p>
                            <p>Vestigingsplaats: </p>
                            <p>{companyContent.city}</p>
                            <p>Telefoon-nummer: </p>
                            <p>{companyContent.phoneNumber}</p>
                            <p>Bedrijfsmail: </p>
                            <p>{companyContent.emailaddress}</p>

                        </div>

                    </>

                }

                {userdata === false &&

                <div className={styles["form"]}>

                    <CustomerDataForm/>

                </div>

                }



            </div>

        </>
    )
}

export default PrivateContent;