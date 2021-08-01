import RequestForm from "../RequestForm/RequestForm";
import CustomerDataForm from "../CustomerDataForm/CustomerDataForm";
import SendButton from "../../Buttons/SendButton/SendButton";
import {useHistory} from "react-router-dom";
import {useFormContext} from "react-hook-form";
import styles from "./Request.module.css";

function Request() {
    const history = useHistory();
    const { handleSubmit } = useFormContext();
    const data = {};

    function onSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }
    return(
        <>
            <div className= {styles['request-wrapper']}>
                <div >

                    <form  onSubmit={handleSubmit(onSubmit)}>

                        <div>

                            <h2>Wat kunnen wij betekenen voor u?</h2>

                            <RequestForm/>

                            <br/>

                            <h2>Waar en voor wie kunnen wij dit betekenen?</h2>

                            <br/>

                            <CustomerDataForm/>

                            <br/>

                            <SendButton type="submit" id="saveButton"/>

                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Request;