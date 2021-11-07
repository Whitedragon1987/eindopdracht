import styles from "./ContactPageComponent.module.css";
import {NavLink} from "react-router-dom";
import Preview from "./ReviewsPreview/Preview";
import Logo from "../HomePageComponents/LogoComponents/Logo";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";


function ContactPageComponent({reviews, setReviews, pictures, setPictures}) {

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

                                <h1> Om deze content te zien moet u zijn ingelogd </h1>

                                <NavLink to="/login">Log hier in</NavLink>
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

                    <NavLink to="/login">Log hier in</NavLink>
                </>

            }

            </>

    )

}

export default ContactPageComponent;