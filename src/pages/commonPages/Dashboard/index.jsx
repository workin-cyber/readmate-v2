import { useContext, useEffect } from "react"
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"
import srcDash from "../../../assets/images/illustrations/dashboard.svg"
import trIcon from "../../../assets/images/icons/TReadingIcon.png"
import tfIcon from "../../../assets/images/icons/TFocusIcon.png"
import fsIcon from "../../../assets/images/icons/FreeStyleIcon.png"
import waIcon from "../../../assets/images/icons/WAIcon.png"
import { Link } from "react-router-dom"

// Creator : Team h
function Dashboard() {

    const { header: { setPageName } } = useContext(mainContext)

    useEffect(() => {
        setPageName("dashboard")
        return () => setPageName("")
    }, [])


    return (
        <div className={styles.container}>
            <img src={srcDash} alt="dash" />
            <div className={styles.BtnContainer}>
                <Link to="/train-reading" >
                    <div className={`${styles.btn} two-colored-div`}>
                        <img src={trIcon} alt="train reading" />
                        <p>train reading</p>
                    </div>
                </Link>
                <Link to="/train-focus" >
                    <div className={`${styles.btn} two-colored-div`}>
                        <img src={tfIcon} alt="train reading" />
                        <p>Train Focus</p>
                    </div>
                </Link>
                <Link to="/assessments" >
                    <div className={`${styles.btn} two-colored-div`}>
                        <img src={waIcon} alt="train reading" />
                        <p>Weekly Assessment</p>
                    </div>
                </Link>
                <Link to="/freestyle" >
                    <div className={`${styles.btn} two-colored-div`}>
                        <img src={fsIcon} alt="train reading" />
                        <p>Freestyle</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default Dashboard