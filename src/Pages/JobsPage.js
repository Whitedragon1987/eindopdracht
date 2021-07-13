import React from "react";
import JobsComponent from "../componenten/JobComponenten/JobsComponent/JobsComponent";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";

function JobsPage() {

    return(
        <>
            <div>
                <JobsComponent/>
            </div>
            <div>
                <JobsComponent/>
            </div>
            <div>
                <JobsComponent/>
            </div>
            <div>
                <JobsComponent/>
            </div>
            <NextButton/>
            <BackButton/>
        </>
    )

}
export default JobsPage;