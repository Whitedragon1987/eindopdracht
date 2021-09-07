import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "../../MachinePageCompnents/Machine/MachineComponent.module.css";
import {useEffect, useState} from "react";

function PictureComponent() {
    const {picture_id} = useParams();

    const [pictureContent, setPictureContent] = useState({});

    useEffect(()=> {
        const token = localStorage.getItem("token");

        async function getPictureContent() {
            try {
                const result = await axios.get(`http://localhost:8080/Pictures/${picture_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        responseType: 'blob',
                    });
                setPictureContent(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getPictureContent();
    }, [picture_id]);

    return(
        <>
            <div className={styles["pagewrapper"]}>

                <div className={styles['picture-component']}>

                    {/*<h1 >Naam :</h1>*/}
                    {/*<p>{machineContent.name}</p>*/}

                    {/*<h1>Omschrijving :</h1>*/}
                    {/*<p>{machineContent.description}</p>*/}

                    {/*<h1>Soort :</h1>*/}
                    {/*<p>{machineContent.type}</p>*/}

                    {/*<h1>Afmetingen :</h1>*/}
                    {/*<p>{machineContent.measurements}</p>*/}

                    {/*<h1>Laatste onderhoud :</h1>*/}
                    {/*<p>{moment(machineContent.lastService).format('DD-MM-YYYY')}</p>*/}

                    {/*<h1>Gepland onderhoud :</h1>*/}
                    {/*<p>{moment(machineContent.plannedService).format('DD-MM-YYYY')}</p>*/}

                </div>


            </div>

        </>

    )
}

export default PictureComponent;