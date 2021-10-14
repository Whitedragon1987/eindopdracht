import styles from "./Logo.module.css"
import logo from "../../../assets/logo.PNG"

function Logo() {

    return (

        <>

            <div className={styles['logo-wrapper']} >

                <img src={logo}
                     alt="logo"
                     className={styles['logo']} />

                <div className={styles['data-wrapper']} >

                    <p> Invisible Gardening </p>

                    <p> Bonzijweg 89 </p>

                    <p> S'HertogenBosch </p>

                    <p> 0123-123456 </p>

                </div>

            </div>

        </>

    )

}

export default Logo;