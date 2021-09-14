import {Controller, useForm} from "react-hook-form";
import styles from "./Request.module.css";
import React, {useContext, useEffect, useState} from "react";
import AlternateAddress from "../AlternateAddress/AlternateAddress";
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

function Request() {

    const { watch, register, control, handleSubmit, formState: {errors} } = useForm();
    const selectAltAddress = watch("altAddress");
    const data = {};
    const [jobs, setJobs] = useState([]);
    const [jobOptions, setJobOptions] = useState();
    const [machines, setMachines] = useState([]);
    const [machineOptions, setMachineOptions] = useState();
    const [machinesChoice, setMachinesChoice] = useState({});
    const [jobsChoice, setJobsChoice] = useState({});
    const token = localStorage.getItem("token")
    const {user} = useContext(AuthContext);

    useEffect(()=> {
        async function fetchJobs() {
            try {
                const result = await axios.get(`http://localhost:8080/jobs`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setJobs(result.data);
                const jobOptions = createJobObjects(result.data);
                // console.log(result.data);
                setJobOptions(jobOptions);
            } catch (error) {
                console.error(error);
            }
        }

        fetchJobs();

        console.log(jobOptions)

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
                setMachines(result.data);
                const machineOptions = createMachineObjects(result.data);
                // console.log(result.data);
                setMachineOptions(machineOptions);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMachines();
        console.log(machineOptions)

    },[]);

    // console.log(jobsChoice)
    // console.log(machinesChoice)

    async function onSubmit(data) {
        try {
            const restult = await axios.post("http://localhost:8080/requests",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    userDataId: user.id,
                    requestStartTime: data.start_date,
                    requestEndTime: data.end_date,
                    jobId: 1001,
                    machineId:1001,
                })

        } catch (error) {
            console.error(error);
        }
        console.log(data)
    }


    return(
        <>
            <div className= {styles['request-wrapper']}>
                <form onSubmit={handleSubmit(onSubmit)}>

                        <div>

                            <h2>Wat kunnen wij betekenen voor u?</h2>

                            <div className={styles['selector-wrapper']}>

                                <div className={styles["machinewrapper"]}>
                                    <Selector
                                        title="Machines"
                                        image={kraan}
                                    />

                                    {machineOptions?

                                        <Multiselect
                                            options={machineOptions}
                                            displayValue="value"
                                            onSelect={(machinesChoice)=>{setMachinesChoice(machinesChoice)}}
                                            onRemove={(machinesChoice)=> {setMachinesChoice(machinesChoice)}}
                                            onSearch={function noRefCheck(){}}
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
                                            }}
                                        />

                                        :

                                        <p>loading options...</p>

                                    }

                                </div>

                                <Selector
                                    title="Offerte"
                                    image={offerte}
                                />

                                <div className={styles["jobwrapper"]}>
                                    <Selector
                                        title="Diensten"
                                        image={vrachtwagen}
                                    />

                                    {jobOptions?

                                        <Multiselect
                                            options={jobOptions}
                                            displayValue="value"
                                            onSelect={(jobsChoice)=> {setJobsChoice(jobsChoice)}}
                                            onRemove={(jobsChoice)=> {setJobsChoice(jobsChoice)}}
                                            onSearch={function noRefCheck(){}}
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
                                            }}

                                        />

                                        :

                                        <p>loading options...</p>

                                    }

                                </div>

                            </div>

                            <h2>Wanneer zou u dit het liefste willen?</h2>

                            <div className={styles['preference-wrapper']}>

                                <Controller
                                    control={control}
                                    name= "start_date"
                                    render={({field}) => (
                                        <DatePicker
                                            placeholderText="Kies uw datum"
                                            onChange={(date)=> field.onChange(date)}
                                            selected={field.value}
                                            dateFormat = "dd/ MM/ yyyy"
                                            minDate={new Date()}
                                            required
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name= "end_date"
                                    render={({field}) => (
                                        <DatePicker
                                            placeholderText="Kies uw datum"
                                            onChange={(date)=> field.onChange(date)}
                                            selected={field.value}
                                            dateFormat = "dd/ MM/ yyyy"
                                            minDate={new Date()}
                                            required
                                        />
                                    )}
                                />

                            </div>

                            <SendButton type="submit" id="saveButton"/>

                            <h2>Waar en voor wie kunnen wij dit betekenen?</h2>

                            <PrivateContent/>

                            <div className={styles['alt-address']}>
                                <label htmlFor="altAddress">
                                Alternatief adres?
                                </label>

                                <input
                                    type="checkbox"
                                    name="altAddress"
                                    id="altAddress"
                                    {...register("altAddress")}
                                />

                            </div>

                            {selectAltAddress&& (
                                <AlternateAddress register={register} errors={errors}/>
                            )}

                        </div>

                </form>


            </div>

        </>
    )
}

export default Request;