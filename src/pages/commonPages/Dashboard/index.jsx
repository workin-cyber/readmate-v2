import { useContext, useEffect } from "react"
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"

// Creator : Team h
function Dashboard() {

    const { header: { setPageName } } = useContext(mainContext)

    useEffect(() => {
        setPageName("dashboard")
        return () => setPageName("")
    }, [])


    return (
        <div className={styles.container}>
            Dashboard
        </div>
    )
}

export default Dashboard