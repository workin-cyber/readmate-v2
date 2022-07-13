import { useState, useContext, useEffect } from "react";
import InputText from "../../components/Common/InputText";
import Button from "../../components/Common/Button";
import styles from './style.module.css'
import { useNavigate, useLocation } from "react-router-dom";
import mainContext from "../../context/mainContext";


export default function FourQues() {
    const { header } = useContext(mainContext)

    const location = useLocation();

    useEffect(() => {
        header.setPageName(`Questions`);
    }, [])
    const nevigateObject = location.state.nevigateObject;

    //איך לשלוח את התשובות?


    const navigate = useNavigate();
    const [vq1, setVq1] = useState(true);
    const [q1, setQ1] = useState("");

    const [vq2, setVq2] = useState(true);
    const [q2, setQ2] = useState("");

    const [vq3, setVq3] = useState(true);
    const [q3, setQ3] = useState("");

    const [vq4, setVq4] = useState(true);
    const [q4, setQ4] = useState("");

    const underline = require('../../assets/images/icons/UnderLine.png')
    function QuesForm() {
        if (q1.trim().length == 0) { setVq1(false) }
        else if (q2.trim().length == 0) { setVq2(false) }
        else if (q3.trim().length == 0) { setVq3(false) }
        else if (q4.trim().length == 0) { setVq4(false) }
        else {
            nevigateObject.roundCounter++;
            if (nevigateObject.roundCounter <= 4) { navigate("/tr/instructions", { state: { nevigateObject } }) }
            else {
                console.log(nevigateObject);
                navigate("/tr/level/exercise", { state: { nevigateObject } })
            }
        }
    }


    return (
        <>

            <div className={styles.nTitle}>Instructions</div>
            <img src={underline} className={styles.nUnderLine} alt="" />
            <div className={styles.newText}>Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque.</div>
            <div className={styles.fourQues}>
                <InputText title={"Who is the main character?"} type="text" placeholder="Describe Here" required={vq1} onChange={(e) => { setVq1(true); setQ1(e.target.value) }} />
                <InputText title={"What can you say about the theme of the story?"} type="text" placeholder="Describe Here" required={vq2} onChange={(e) => { setVq2(true); setQ2(e.target.value) }} />
                <InputText title={"Why do you think the author wrote this book?"} type="text" placeholder="Describe Here" required={vq3} onChange={(e) => { setVq3(true); setQ3(e.target.value) }} />
                <InputText title={"What do you think is going to happen?"} type="text" placeholder="Describe Here" required={vq4} onChange={(e) => { setVq4(true); setQ4(e.target.value) }} />
            </div>
            <Button title="Done" fontColor="white" height="50px" startFunction={QuesForm} />
        </>
    )
}