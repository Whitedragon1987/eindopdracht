import React from "react";
import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import Employees from "../componenten/EmployeesPageComponents/Employees";

function EmployeesPage() {

    return(
        <>
            <Employees/>

            <NextButton/>

            <BackButton/>

        </>
    )

}
export default EmployeesPage;