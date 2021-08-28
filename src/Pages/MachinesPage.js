import React from "react";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import Machines from "../componenten/MachinesPageComponents/Machines/Machines";

function MachinesPage() {

    return(
        <>
            <Machines/>

            <NextButton/>

            <BackButton/>

        </>
    )

}
export default MachinesPage;