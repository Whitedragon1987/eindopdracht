import React from "react";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import JobComponent from "../componenten/JobPageComponents/JobComponent/JobComponent";
import ImageComponent from "../componenten/ImageComponents/ImageComponent";

function JobPage() {

    return(
        <div>
            <JobComponent/>
            <NextButton />
            <BackButton/>
        </div>
    )

}
export default JobPage;