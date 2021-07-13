import React from "react";
import { uesState, useForm} from "react-hook-form";
import kraan from '../assets/kraan.jpg'
import vrachtwagen from '../assets/vrachtwagen.jpg';
import stylesheetCustomerPage from '../css/stylesheetCustomerPage.css'
import SendButton from "../componenten/SendButton";

function CustomerPage() {
    const{ handleSubmit, register} = useForm();

    function onEmployeeSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
    }

    return(
        <>
            <div id="pageWrapper">

                <form  onSubmit={onEmployeeSubmit}>

                    <div>

                        <h1>Wat kunnen wij betekenen voor u?</h1>

                        <div id="imageTitles">

                            <h2 htmlFor="MachineDropdown" id="machinesDropdown">Machines</h2>

                            <h2 htmlFor="ServicesDropdown" id="servicesDropdown">Diensten</h2>

                        </div>

                        <br/>

                        <div id="images">

                            <img alt="dropdownMachines" src={kraan} id="kraan"/>

                            <img alt="dropdownServices" src={vrachtwagen} id="vrachtwagen"/>

                        </div>

                        <br/>

                        <div id="dropdownMenuWrapper">

                            <label className="dropdownServices">

                                <select>

                                    <option> Menu item 1 </option>
                                    <option> Menu item 2 </option>
                                    <option> Menu item 3 </option>

                                </select>

                            </label>

                            <label className="dropdownMachines">

                                <select>

                                    <option> Menu item 1 </option>
                                    <option> Menu item 2 </option>
                                    <option> Menu item 3 </option>

                                </select>

                            </label>

                        </div>

                        <h2>Wanneer zou u dit het liefste willen?</h2>

                        <br/>

                        <div id="preferenceWrapper">

                            <label htmlFor="preferenceDate" >
                                Voorkeursdatum :
                            </label>

                            <input
                                type="text"
                                id="preferenceDate"
                                {...register("preferenceDate")}
                            />

                        </div>

                        <br/>

                        <h2>Waar en voor wie kunnen wij dit betekenen?</h2>

                        <br/>

                        <div id="personsWrapper">

                            <label htmlFor="firstname">
                                voornaam :
                            </label>

                            <input
                                type="text"
                                id="firstname"
                                {...register("firsname")}
                            />

                            <label htmlFor="lastname">
                                achternaam :
                            </label>

                            <input
                                type="text"
                                id="lastname"
                                {...register("lastname")}
                            />

                            <label htmlFor="adres">
                                adres :
                            </label>

                            <input
                                type="text"
                                id="adres"
                                {...register("adres")}
                            />

                            <label htmlFor="zipcode">
                                postcode :
                            </label>

                            <input
                                type="text"
                                id="zipcode"
                                {...register("zipcode")}
                            />

                            <label htmlFor="city">
                                woonplaats :
                            </label>

                            <input
                                type="text"
                                id="city"
                                {...register("city")}
                            />

                            <label htmlFor="emailadress">
                                emailadres :
                            </label>

                            <input
                                type="text"
                                id="emailadress"
                                {...register("emailadress")}
                            />

                            <label htmlFor="phonenumber">
                                telefoonnummer :
                            </label>

                            <input
                                type="text"
                                id="phonenumber"
                                {...register("phonenumber")}
                            />

                            <label htmlFor="alternateAdress">
                                Ander lever adres?
                            </label>

                            <input
                                type="checkbox"
                                name="alternateAdress"
                                id="alternateAdress"
                            />

                            <label htmlFor="altFirstname">
                                voornaam :
                            </label>

                            <input
                                type="text"
                                id="altFirstname"
                                {...register("altFirsname")}
                            />

                            <label htmlFor="altLastname">
                                achternaam :
                            </label>

                            <input
                                type="text"
                                id="altLastname"
                                {...register("altLastname")}
                            />

                            <label htmlFor="altAdres">
                                adres :
                            </label>

                            <input
                                type="text"
                                id="altAdres"
                                {...register("altAdres")}
                            />

                            <label htmlFor="altZipcode">
                                postcode :
                            </label>

                            <input
                                type="text"
                                id="altZipcode"
                                {...register("altZipcode")}
                            />

                            <label htmlFor="altCity">
                                woonplaats :
                            </label>

                            <input
                                type="text"
                                id="altCity"
                                {...register("altCity")}
                            />

                        </div>

                        <br/>

                        <SendButton type="submit" id="saveButton"/>

                    </div>

                </form>

            </div>
        </>
    )
}

export default CustomerPage;