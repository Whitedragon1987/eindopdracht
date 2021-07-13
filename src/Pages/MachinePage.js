import React from "react";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import MachineComponent from "../componenten/MachineComponenten/MachineComponent/MachineComponent";
import ImageComponent from "../componenten/ImageComponent/ImageComponent";
function MachinePage() {

    return(
        <div>
            <MachineComponent/>
            <ImageComponent/>
            <NextButton />
            <BackButton/>
        </div>
    )

}
export default MachinePage;