import React from "react";
import JobsComponent from "../componenten/JobspageComponents/JobsComponents/JobsComponent";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import Jobs from "../componenten/JobspageComponents/Jobs/Jobs";


function JobsPage() {

    return(
        <>
            <Jobs/>

            <NextButton/>

            <BackButton/>

        </>
    )

}
export default JobsPage;