import React from "react";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import JobComponent from "../componenten/JobComponenten/JobComponent/JobComponent";
import ImageComponent from "../componenten/ImageComponent/ImageComponent";

function JobPage() {

    return(
        <div>
            <JobComponent/>
            <ImageComponent/>
            <NextButton />
            <BackButton/>
        </div>
    )

}
export default JobPage;