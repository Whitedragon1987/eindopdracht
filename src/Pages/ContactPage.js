import Preview from "../componenten/ContactPageComponents/ReviewsPreview/Preview";
import {NavLink} from "react-router-dom";
import styles from "../componenten/ContactPageComponents/ContactPage.module.css"
import japanse from "../assets/projects/japanse tuin.jpg"
import Logo from "../componenten/HomePageComponents/LogoComponents/Logo";

function ContactPage() {

    return(
        <>
            <div>
                <div className={styles["header"]}>

                    <h1>Reviews</h1>

                    <NavLink to="/review" exact activeClassName="active-link">schrijf uw review</NavLink>

                </div>


                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    rating={4}
                    />

                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    rating={2}
                />

                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    rating={3}
                />

            </div>

            <div className={styles["image-wrapper"]}>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

                <img src={japanse} alt="foto"/>

            </div>

            <div className={styles["footer"]}>
                <Logo/>

            </div>

        </>
    )
}

export default ContactPage;