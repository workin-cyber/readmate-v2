// import styles from './style.module.css'
import "./style.css";
import FooterStart from "../../../components/Common/StartFooter";
import Frame from "./Frame.jpg";
import student from "../../../../assets/images/illustrations/assessmen-table.png";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from './data'

// Creator : Team A - Daniel
export default function Page1() {
    let navigate = useNavigate()

    useEffect(() => {

        // fetch()
        // .then()
    }, []);
    const startFunction = () => {
        navigate('/teama/page3', { state: { data: data } })
    }
    return (
        <div>
            <img className="img-page1" src={student} alt="" />
            <br />
            <FooterStart
                startFunction={startFunction}
                title='START'
                explanation="Scelerisque enim purus ipsum at amet, et mauris, est. Quisque interdum sollicitudin ultrices pellentesque a imperdiet sapien."
                img={Frame}
            />
        </div>
    );
}


