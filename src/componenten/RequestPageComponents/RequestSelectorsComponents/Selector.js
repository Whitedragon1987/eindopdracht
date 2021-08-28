import {useFormContext} from "react-hook-form";
import {useHistory} from "react-router-dom";

function Selector({title, image}) {

    const history = useHistory();

    function redirect() {
        if(title == "Machines") {
            history.push("/machines")
        } else if (title == "Diensten") {
            history.push("/jobs")
        } else  {
            history.push("/quote")
        }
    }

    return(
        <>
            <div onClick={() => redirect()}>
                <h2>{title}</h2>
                <img alt={title} src={image}/>
            </div>
        </>
    )
}

export default Selector;