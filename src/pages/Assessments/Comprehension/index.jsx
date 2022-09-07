import UmooveApi from '../../../components/api/UmooveApi'
import TitleRead from '../../../components/Common/TitleRead'
import { useContext, useEffect } from 'react'

import '../../../components/api/UmooveApi'

import { useNavigate, useLocation } from 'react-router-dom';
import mainContext from '../../../context/mainContext'
import { exams } from './data'

import Button from "../../../components/Common/Button"
import styles from './style.module.css'
import examImg from './image/exam.jpg'

// Creator : Team A - Amos

function Comprehension() {
    const l = useLocation()
    const navigate = useNavigate()

    const { header: { setPageName } } = useContext(mainContext)

    useEffect(() => {
        setPageName("comprehension")
        return () => setPageName("")
    }, [])

    const nextPage = () => {
        console.log("clicked");
        // UmooveApi.API_stopReading();//לבדוק
        // UmooveApi.API_stopUmoove();
        console.log({ exam: exams });
        navigate('/assessments/comprehension-Test', { state: { exam: exams } });
    }

    useEffect(() => { UmooveApi.API_startReading() }, [])

    return <>
        <div className={styles.container} >
            <div>    <TitleRead /> </div>
            <div> <img className={styles.img} src={examImg} alt="text" /> </div>
            <Button startFunction={() => { nextPage() }} title={"Done"} />
        </div>
    </>
}

export default Comprehension