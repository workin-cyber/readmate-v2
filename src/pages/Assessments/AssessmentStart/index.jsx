import styles from './style.module.css'
import FooterStart from "../../../components/Common/StartFooter";
import Frame from "./Frame.jpg";
import student from "../../../assets/images/illustrations/assessmen-table.png";
import { useNavigate } from "react-router-dom";
// import data from './data'

// Creator : Team A - Daniel
export default function AssessmentStart() {
    const navigate = useNavigate()
    const startFunction = () => navigate('/assessments/instructions'/* , { state: { data: data } } */)

    return (
        <div className={styles.container}>
            <img src={student} alt="student" />
            <FooterStart
                startFunction={startFunction}
                title='START'
                explanation="Scelerisque enim purus ipsum at amet, et mauris, est. Quisque interdum sollicitudin ultrices pellentesque a imperdiet sapien."
                img={Frame}
            />
        </div>
    );
}


