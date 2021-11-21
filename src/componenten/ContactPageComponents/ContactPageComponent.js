import styles from "./ContactPageComponent.module.css";
import {NavLink} from "react-router-dom";
import Preview from "./ReviewsPreview/Preview";
import Logo from "../HomePageComponents/LogoComponents/Logo";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";


function ContactPageComponent({reviews, pictures}) {

    const {user} = useContext(AuthContext);

    return (

        <>

            {user != null ?

                <>
                    <div>

                        <div className={styles["header"]}>

                            <strong>

                                <NavLink to="/reviews" exact activeClassname="active-link"
                                         className={styles["link"]}>

                                    Reviews

                                </NavLink>

                            </strong>

                            <NavLink to="/review" exact activeClassName="active-link">

                                plaats uw review

                            </NavLink>

                        </div>

                        {reviews != null ?

                            <div className={styles["reviews"]}>

                                {reviews.slice(0, 3).map((review) => {

                                    return (

                                        <Preview key={review.id}
                                                 pic={review.picture.data}
                                                 title={review.picture.name}
                                                 name={review.name}
                                                 descr={review.description}
                                                 rating={review.value}/>

                                    )

                                })}

                            </div>

                            :

                            <p>

                                loading reviews...

                            </p>

                        }

                    </div>

                    <div>

                        {pictures != null ?

                            <div className={styles["image-wrapper"]}>

                                {pictures.slice(0, 8).map((picture) => {

                                    return (

                                        <img src={picture.url}
                                             alt={picture.name}
                                             key={picture.name}/>

                                    )

                                })}

                            </div>

                            :

                            <>

                                <p>Geen afbeeldingen beschikbaar</p>

                            </>

                        }

                    </div>

                    <div className={styles["footer"]}>

                        <Logo/>

                    </div>

                </>

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

export default ContactPageComponent;