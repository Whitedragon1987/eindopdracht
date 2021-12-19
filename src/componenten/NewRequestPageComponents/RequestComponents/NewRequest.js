import {Controller, useForm} from "react-hook-form";
import styles from "./NewRequest.module.css";
import {useContext, useEffect, useState} from "react";
import PrivateContent from "../../CustomerDataPageComponents/PrivateContent/PrivateContent";
import axios from "axios";
import Selector from "../RequestSelectorsComponents/Selector";
import kraan from "../../../assets/Machines/kraan.jpg";
import {Multiselect} from "multiselect-react-dropdown";
import offerte from "../../../assets/offerte.jpg";
import vrachtwagen from "../../../assets/Machines/vrachtwagen.jpg";
import DatePicker from "react-datepicker";
import SendButton from "../../Buttons/SendButton/SendButton";
import createJobObjects from "../../../helpers/createJobObjects";
import createMachineObjects from "../../../helpers/createMachineObjects";
import {AuthContext} from "../../../Context/AuthContext";
import createMachineIdList from "../../../helpers/createMachineIdList";
import {NavLink, useHistory} from "react-router-dom";
import createJobIdList from "../../../helpers/createJobIdList";



function NewRequest() {

    const { control, handleSubmit, formState: {errors} } = useForm();
    const [jobOptions, setJobOptions] = useState();
    const [machineOptions, setMachineOptions] = useState();
    const [machinesChoice, setMachinesChoice] = useState([]);
    const [jobsChoice, setJobsChoice] = useState([]);
    const token = localStorage.getItem("token");
    const {user} = useContext(AuthContext);
    const history = useHistory();
    let machineIdList = {};
    let jobIdList = {};

    useEffect(()=> {

        async function fetchJobs() {

            try {

                const result = await axios.get(`http://localhost:8080/jobs`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                const jobOptions = createJobObjects(result.data);

                setJobOptions(jobOptions);

            } catch (error) {

                console.error(error);

            }

        }

        fetchJobs();

    },[]);

    useEffect(()=> {

        async function fetchMachines() {

            try {

                const result = await axios.get(`http://localhost:8080/machines`, {

                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }

                });

                const machineOptions = createMachineObjects(result.data);

                setMachineOptions(machineOptions);

            } catch (error) {

                console.error(error);

            }

        }

        fetchMachines();

    },[]);

    async function onSubmit(data) {

        if (machinesChoice != null) {

            machineIdList = createMachineIdList(machinesChoice);

        }

        if (jobsChoice != null) {
            jobIdList = createJobIdList(jobsChoice)

        }

        await uploadRequest(jobIdList, machineIdList, data)

    }

    async function uploadRequest(jobIdList, machineIdList, data){
        try {

            axios({

                method: 'POST',
                url: 'http://localhost:8080/requests',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },

                data: {

                    userDataId: user.id,
                    requestStartTime: data.start_date,
                    requestEndTime: data.end_date,
                    jobIdList: jobIdList,
                    machineIdList: machineIdList,

                }

            })
            // the normal axios.post gives troubles when posting to back-end if the antmatchers from springboot are active
            // await axios.post("http://localhost:8080/requests",
            //
            //     {
            //
            //         headers: {
            //
            //             "Content-Type": "application/json",
            //             Authorization: `Bearer ${token}`,
            //
            //         },
            //
            //         userDataId: user.id,
            //         requestStartTime: data.start_date,
            //         requestEndTime: data.end_date,
            //         jobIdList: jobIdList,
            //         machineIdList: machineIdList,
            //
            //     })

        } catch (error) {

            console.error(error);

        }

        history.push("/")

    }



    return(

        <>
            {user != null ?

                <div className= {styles['request-wrapper']} >

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div>

                            <h2> Wat kunnen wij betekenen voor u? </h2>

                            <div className={styles['selector-wrapper']} >

                                <div className={styles["machinewrapper"]} >

                                    <Selector title="Machines"
                                              image={kraan} />

                                    {machineOptions?

                                        <Multiselect options={machineOptions}
                                                     displayValue="value"
                                                     onSelect= {(selectedList, selectedItem) => {
                                                         setMachinesChoice([...machinesChoice, selectedItem])}}
                                                     onRemove={((selectedList, selectedItem) => {setMachinesChoice(machinesChoice.filter((item)=>{
                                                         return item.value !== selectedItem.value}))})}
                                                     showCheckbox
                                                     closeOnSelect={false}
                                                     placeholder="machines"
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

                                        :

                                        <p>loading options...</p>

                                    }

                                </div>

                                <Selector title="Offerte"
                                          image={offerte} />

                                <div className={styles["jobwrapper"]} >

                                    <Selector title="Diensten"
                                              image={vrachtwagen} />

                                    {jobOptions?

                                        <Multiselect options={jobOptions}
                                                     displayValue="value"
                                                     onSelect= {(selectedList, selectedItem) => {
                                                         setJobsChoice([...jobsChoice, selectedItem])}}
                                                     onRemove={((selectedList, selectedItem) => {setJobsChoice(jobsChoice.filter((item)=>{
                                                         return item.value !== selectedItem.value}))})}
                                                     closeOnSelect={false}
                                                     showCheckbox
                                                     placeholder="diensten"
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

                                        :

                                        <p> loading options... </p>

                                    }

                                </div>

                            </div>

                            <h2> Wanneer zou u dit het liefste willen? </h2>

                            <div className={styles['preference-wrapper']} >

                                <Controller control={control}
                                            name= "start_date"
                                            render={({field}) => (

                                                <DatePicker
                                                    placeholderText="Kies uw datum"
                                                    onChange={(date)=> field.onChange(date)}
                                                    selected={field.value}
                                                    dateFormat = "dd/ MM/ yyyy"
                                                    minDate={new Date()}
                                                    required />

                                            )} />

                                <Controller control={control}
                                            name= "end_date"
                                            render={({field}) => (

                                                <DatePicker
                                                    placeholderText="Kies uw datum"
                                                    onChange={(date)=> field.onChange(date)}
                                                    selected={field.value}
                                                    dateFormat = "dd/ MM/ yyyy"
                                                    minDate={new Date()}
                                                    required />

                                            )} />

                            </div>

                            <SendButton type="submit"
                                        id="saveButton" />

                            <h2> Waar en voor wie kunnen wij dit betekenen?  </h2>

                            <PrivateContent/>

                        </div>

                    </form>

                </div>

                :

                <>

                    <h1> Om deze content te zien moet u zijn ingelogd </h1>

                    <p>

                        <NavLink to="/login">Log hier in</NavLink>

                    </p>

                    <p>

                        <NavLink to="/signup">Schrijf u hier in</NavLink>

                    </p>

                </>

            }



        </>

    )

}

export default NewRequest;