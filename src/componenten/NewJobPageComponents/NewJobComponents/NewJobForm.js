import {useEffect, useState} from "react";
import styles from "./NewJobForm.module.css";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {forkJoin, map} from "rxjs";
import Upload from "../../Upload/Upload";
import {Multiselect} from "multiselect-react-dropdown";
import createEmployeeObjects from "../../../helpers/createEmployeeObjects";

import selectEmployeeId from "../../../helpers/selectEmployeeId";

function NewJobForm() {

    const { register, watch, formState: {errors}, handleSubmit} = useForm();
    const selectEmployees = watch("employeesNeeded");
    const [employeeOptions, setEmployeeOptions] = useState();
    const [employeeChoice, setEmployeeChoice] = useState([]);
    const message = "dit veld mag niet leeg blijven"
    const history = useHistory();
    const token = localStorage.getItem("token");
    const [file, setFile] = useState({});
    const [url, setUrl] = useState({});
    const [employeeId, setEmployeeId] = useState();

    function uploadJob(job,employeeId) {

       return axios.post("http://localhost:8080/jobs",

                {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    name: job.job_name,
                    description: job.job_description,
                    employeeNeeded: job.employeesNeeded,
                    employee: employeeChoice[0].employee,

                })

    }

    function uploadPicture() {

        let formData = new FormData();

        formData.append("file", file);

        return  axios.post("http://localhost:8080/pictures/upload", formData,

            {

                headers: {

                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,

                },

                file: formData

            })

    }

    async function assignPictureToJob(jobId, pictureId){

        try {

            await axios.post(`http://localhost:8080/jobs/job/${jobId}/picture`,

               {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },

                    id: pictureId,

                })

        } catch (error) {

            console.error(error);

        }

        history.push("/jobs")

    }

    useEffect(()=> {

        async function fetchEmployees() {

            try {

                const result = await axios.get(`http://localhost:8080/employees`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });


                const employeeOptions = createEmployeeObjects(result.data);

                setEmployeeOptions(employeeOptions);

            } catch (error) {

                console.error(error);

            }

        }

        fetchEmployees();

    },[]);



    async function onSubmit(job) {
console.log(employeeChoice)
        forkJoin([

             uploadJob(job,employeeId),
             uploadPicture()

         ]).pipe(map(([job, picture]) => {

             assignPictureToJob(job.data.id, picture.data.message)

         })).subscribe()

    }
    return (

        <div id="pageWrapper" >

            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles['new-job-form']} >

                <h2 className={styles['new-job']} >

                    Nieuwe Karwei

                </h2>

                    <label htmlFor="name" >

                        Klusnaam :

                    </label>

                <input id="name"
                       {...register("job_name",
                           {required: {value: true, message: message }})} />

                {errors.job_name && <p> {errors.job_name.message} </p>}

                <label htmlFor="description" >

                    Omschrijving :

                </label>

                <input id="description"
                       {...register("job_description",
                           {required: {value: true, message: message }})} />

                {errors.job_description && <p> {errors.job_description.message} </p>}

                <label htmlFor="employeesNeeded" >

                    Medewerker(s) nodig?

                </label>

                <input type="checkbox"
                       name="employeesNeeded"
                       id="employeesNeeded"
                       {...register("employeesNeeded")} />

                <div className={styles["employee-wrapper"]}>

                    {selectEmployees&& (


                        <Multiselect options={employeeOptions}
                                     displayValue="value"
                                     singleSelect={true}
                                     onSelect={(selectedItem) => setEmployeeChoice(selectedItem)}
                                     closeOnSelect={false}
                                     showCheckbox
                                     placeholder="medewerkers"
                                     style={{
                                         chips: {
                                             background: '#EDF50B',
                                             color: `#000`
                                         },
                                         multiselectContainer: {
                                             color: '#000'
                                         },
                                         searchBox: {
                                             border: '1px solid #EDF50B',
                                             width: `260px`
                                         }
                                     }} />

                    )}

                </div>

                <Upload file={file}
                        setFile={setFile}
                        url={url}
                        setUrl={setUrl} />

               <SaveButton type="submit" />

            </form>

        </div>

    )

}

export default NewJobForm;