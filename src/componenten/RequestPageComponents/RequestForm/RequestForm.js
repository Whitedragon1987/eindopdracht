import React, {useEffect, useState} from "react";
import kraan from "../../../assets/Machines/kraan.jpg";
import vrachtwagen from "../../../assets/Machines/vrachtwagen.jpg";
import offerte from "../../../assets/offerte.jpg";
import styles from "./RequestForm.module.css"
import Selector from "../RequestSelectorsComponents/Selector";
import DatePicker from "react-datepicker";
import axios from "axios";
import {Controller, useForm, useFormContext} from "react-hook-form";
import {Multiselect} from "multiselect-react-dropdown";
import SendButton from "../../Buttons/SendButton/SendButton";

function RequestForm() {

    const {register, control, handleSubmit} = useFormContext();
    const token = localStorage.getItem("token")
    const [jobs, setJobs] = useState([]);
    const [jobOptions, setJobOptions] = useState();
    const [machines, setMachines] = useState([]);
    const [machineOptions, setMachineOptions] = useState();
    const [machinesChoice, setMachinesChoice] = useState({});
    const [jobsChoice, setJobsChoice] = useState({});


    useEffect(()=> {
        const token = localStorage.getItem("token")
        async function fetchJobs() {
            try {
                const result = await axios.get(`http://localhost:8080/jobs`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setJobs(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        const jobOptions = jobs.map((job) => {
            const container = {};

            container[job.id] = job.id;
            container["value"] = job.name;

            return container;
        })
        fetchJobs();
        setJobOptions(jobOptions);
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
                // console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        const machineOptions = machines.map((machine) => {
            const container = {};

            container[machine.id] = machine.id;
            container["value"] = machine.name;

            return container;
        })
        fetchMachines();
        setMachineOptions(machineOptions);
        console.log(machineOptions)

    },[]);

    console.log(jobsChoice)
    console.log(machinesChoice)

    function onSubmit(data) {
        console.log(data)
    }

    return(
        <form className={styles['request-form']} onSubmit={handleSubmit(onSubmit)}>

            <div className={styles['selector-wrapper']}>

                <div className={styles["machinewrapper"]}>
                    <Selector
                        title="Machines"
                        image={kraan}
                    />

                    {machines?

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

                    {jobs?

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
                    name= "prefered-date"
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

        </form>
    )
}

export default RequestForm;