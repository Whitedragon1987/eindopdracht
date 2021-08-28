import NextButton from "../componenten/Buttons/NextButton/NextButton";
import BackButton from "../componenten/Buttons/BackButton/BackButton";
import MachineComponent from "../componenten/MachinePageCompnents/Machine/MachineComponent";


function MachinePage() {

    return(
        <>

                <div>

                    <MachineComponent/>

                    <NextButton />

                    <BackButton/>

                </div>

        </>

    )

}
export default MachinePage;