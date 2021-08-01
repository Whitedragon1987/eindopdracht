import {useState} from "react";


function Upload() {
    const [selectedFile, setSelectFile] = useState();

    const onChangeHandler=event=>{

        setSelectFile(event.target.files[0]);
        console.log(selectedFile)

    }

    return(
        <input type="file" name="file" onChange={onChangeHandler}/>
    )
}

export default Upload;