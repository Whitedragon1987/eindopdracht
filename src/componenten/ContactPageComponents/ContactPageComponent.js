import styles from "./ContactPageComponent.module.css";
import {NavLink} from "react-router-dom";
import Preview from "./ReviewsPreview/Preview";
import Logo from "../HomePageComponents/LogoComponents/Logo";


function ContactPageComponent({reviews, setReviews, pictures, setPictures}) {

    return (

        <>

            <div>

                <div className={styles["header"]} >

                    <strong>
                        <NavLink to="/reviews" exact activeClassname="active-link"
                                 className={styles["link"]} >

                            Reviews

                        </NavLink>
                    </strong>

                    <NavLink to="/review" exact activeClassName="active-link" >

                        plaats uw review

                    </NavLink>

                </div>

                {reviews != null ?

                    <div className={styles["reviews"]} >

                        {reviews.slice(0,3).map((review)=> {

                            return (

                                <Preview key={review.id}
                                         pic={review.picture.data}
                                         title={review.picture.name}
                                         name={review.name}
                                         descr={review.description}
                                         rating={review.value} />

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

                    <div className={styles["image-wrapper"]} >

                        {pictures.slice(0,8).map((picture)=> {

                            return(

                                <img src={picture.url}
                                     alt={picture.name}
                                     key={picture.name} />

                            )

                        })}

                    </div>

                :

                <p>

                    loading ...

                </p>

                }

            </div>

            <div className={styles["footer"]} >

                <Logo/>

            </div>

        </>

    )

}

export default ContactPageComponent;