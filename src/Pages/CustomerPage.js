import React from "react";
import { useHistory } from "react-router-dom";
import kraan from '../assets/kraan.jpg'
import vrachtwagen from '../assets/vrachtwagen.jpg';
import CustomerDataForm from "../componenten/CustomerDataForm/CustomerDataForm";
import SendButton from "../componenten/Buttons/SendButton/SendButton";
import RequestForm from "../componenten/RequestForm/RequestForm";

function CustomerPage() {

    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    return(
        <>
            <div id="pageWrapper">

                <form  onSubmit={onSubmit}>

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
        </>
    )
}

export default CustomerPage;