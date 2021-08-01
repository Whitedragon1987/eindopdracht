import React from "react";
import MachinesComponent from "../componenten/MachineComponenten/MachinesComponent/MachinesComponent";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";

function MachinesPage() {

    return(
        <>
            <div>
                <MachinesComponent/>
            </div>

            <br/>

            <div>
                <MachinesComponent/>
            </div>

            <br/>

            <div>
                <MachinesComponent/>
            </div>

            <br/>

            <div>
                <MachinesComponent/>
            </div>
            <NextButton/>
            <BackButton/>
        </>
    )

}
export default MachinesPage;