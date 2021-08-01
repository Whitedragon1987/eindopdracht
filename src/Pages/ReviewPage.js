import Preview from "../componenten/ReviewPageComponenten/ReviewsPreview/Preview";
import {NavLink} from "react-router-dom";
import styles from "../componenten/ReviewPageComponenten/ReviewPage.module.css"
import japanse from "../assets/projects/japanse tuin.jpg"
import Logo from "../componenten/HomePageComponenten/LogoComponenten/Logo";

function ReviewPage() {

    return(
        <>
            <div>
                <div className={styles["header"]}>

                    <h1>Reviews</h1>

                    <NavLink to="/new-review" exact activeClassName="active-link">schrijf uw review</NavLink>

                </div>


                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    waarde={4}
                    />

                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    waarde={4.5}
                />

                <Preview
                    foto={japanse}
                    title="japanse tuin"
                    naam="K. Bovenkamer"
                    omschrijving="Zeer tevreden over het geleverde eindresultaat"
                    waarde={4.5}
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

export default ReviewPage;