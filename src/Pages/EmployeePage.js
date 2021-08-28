import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import EmployeeComponent from "../componenten/EmployeePageComponents/EmployeeComponent/EmployeeComponent";


function EmployeePage() {

    return(
        <>

            <div>

                <EmployeeComponent/>

                <NextButton />

                <BackButton/>

            </div>

        </>

    )

}
export default EmployeePage;