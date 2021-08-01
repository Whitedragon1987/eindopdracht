import CustomerDataForm from "../../RequestPageComponenten/CustomerDataForm/CustomerDataForm";
import DatePicker from "react-datepicker";
import styles from "./Quote.module.css";
import Upload from "../Upload/Upload";
import SendButton from "../../Buttons/SendButton/SendButton";

function Quote(){

    return(
        <>
            <div className={styles['quote-wrapper']}>
                <br/>
                <h1>Voor wie mogen wij een offerte aanbieden?</h1>
                <br/>
               <CustomerDataForm/>
                <br/>
                <div className={styles['preference-wrapper']}>
                    <h1>Voorkeursdatum</h1>
                    <DatePicker/>

                </div>
                <br/>
                <h3>Omschrijving</h3>
                <br/>
                <input className={styles['input-description']}/>
                <br/>
                <Upload/>
                <br/>
                <SendButton/>
            </div>
        </>
    )
}

export default Quote;