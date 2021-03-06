import {useContext} from "react";
import styles from "./CustomerDataForm.module.css";
import {useFormContext} from "react-hook-form";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";


function CustomerDataForm() {

    const { register, formState: {errors}, handleSubmit } = useFormContext();
    const message = "Dit veld mag niet leeg blijven";
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token")

    async function sendUserdata(userdata) {

        try {

            await axios.post("http://localhost:8080/userdata",

                {

                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },

                    id: user.id,
                    userFirstname: userdata.user_firstname,
                    userLastname: userdata.user_lastname,
                    userAddress: userdata.user_address,
                    userZipcode: userdata.user_zipcode,
                    userCity: userdata.user_city,
                    userPhoneNumber: userdata.user_phonenumber,

            });

        } catch (error){

            console.error(error);

        }

    }

    async function assignUserDataToUser() {

        try {
            await axios.put(`http://localhost:8080/users/${user.username}/${user.id}`,

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                });

        } catch (error){

            console.error(error);

        }

    }

    async function onSubmit(userdata){
        try {
            await sendUserdata(userdata);
            setTimeout(() => {

                assignUserDataToUser();
                history.push(`/`)

            }, 500);

        } catch (error) {
            console.error(error);
        }
    }
    return(

        <>

            <form className={styles['customer-data-form']}
                  onSubmit={handleSubmit(onSubmit)} >


                <label htmlFor="user_firstname" >

                    voornaam :

                </label>

                <div className={styles["firstname"]} >

                    <input id="user_firstname"
                           {...register("user_firstname",
                               {required: {value: true, message: message }})} />

                    {errors.user_firstname && <p> {errors.user_firstname.message} </p>}

                </div>


                <label htmlFor="lastname" >

                    achternaam :

                </label>

                <div className={styles["lastname"]} >

                    <input id="lastname"
                           {...register("user_lastname",
                               {required: {value: true, message: message }})} />

                    {errors.user_lastname && <p> {errors.user_lastname.message} </p>}

                </div>

                <label htmlFor="address" >

                    adres :

                </label>

                <div className={styles["address"]} >

                    <input id="address"
                           {...register("user_address",
                               {required: {value: true, message: message }})} />

                    {errors.user_address && <p> {errors.user_address.message} </p>}

                </div>


                <label htmlFor="zipcode" >

                    postcode :

                </label>

                <div className={styles["zipcode"]} >

                    <input id="zipcode"
                           {...register("user_zipcode",
                               {required: {value: true, message: message }})} />

                    {errors.user_zipcode && <p> {errors.user_zipcode.message} </p>}

                </div>


                <label htmlFor="city" >

                    woonplaats :

                </label>

                <div className={styles["city"]} >

                    <input id="city"
                           {...register("user_city",
                               {required: {value: true, message: message }})} />

                    {errors.user_city && <p> {errors.user_city.message} </p>}

                </div>

                <label htmlFor="phonenumber" >

                    telefoonnummer :

                </label>

                <div className={styles["phone"]} >

                    <input id="phonenumber"
                           {...register("user_phonenumber",
                               {required: {value: true, message: message }})} />

                    {errors.user_phonenumber && <p> {errors.user_phonenumber.message} </p>}

                </div>

                <SaveButton/>

            </form>

        </>

    )

}

export default CustomerDataForm;