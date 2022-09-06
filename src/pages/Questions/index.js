import { useState, useContext, useEffect, useRef } from "react";
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
    const navigateObject = location.state.navigateObject;

    const inputRef1 = useRef("");
    const inputRef2 = useRef("");
    const inputRef3 = useRef("");
    const inputRef4 = useRef("");

    const q1 = inputRef1.current
    const q2 = inputRef2.current
    const q3 = inputRef3.current
    const q4 = inputRef4.current


    const navigate = useNavigate();
    const [vq1, setVq1] = useState(true);
    const [vq2, setVq2] = useState(true);
    const [vq3, setVq3] = useState(true);
    const [vq4, setVq4] = useState(true);

    const underline = require('../../assets/images/icons/UnderLine.png')
    function QuesForm() {
        console.log(q1.value, q2.value, q3.value, q4.value,);
        if (q1.value.trim().length == 0) { setVq1(false) }
        else if (q2.value.trim().length == 0) { setVq2(false) }
        else if (q3.value.trim().length == 0) { setVq3(false) }
        else if (q4.value.trim().length == 0) { setVq4(false) }
        else {
            navigateObject.roundCounter++;
            let question = {
                type: "pushUp",
                answer: [{ 1: q1.value }, { 2: q2.value }, { 3: q3.value }, { 4: q4.value }]
            }

            navigateObject.questions.push(question)
            if (navigateObject.roundCounter <= 4) { console.log(navigateObject); navigate("/train-reading/pushup", { state: { navigateObject } }) }
            else {
                console.log(navigateObject);
                // navigate("/tr/exercise", { state: { navigateObject } })
                navigate("/train-reading/result", { state: { navigateObject } })
            }
        }
    }


    return (
        <>

            <div className={styles.nTitle}>Instructions</div>
            <img src={underline} className={styles.nUnderLine} alt="" />
            <div className={styles.newText}>Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque.</div>
            <div className={styles.fourQues}>
                <InputText ref={inputRef1} title={"Who is the main character?"} type="text" placeholder="Describe Here" required={vq1} onChange={() => { setVq1(true) }} />
                <InputText ref={inputRef2} title={"What can you say about the theme of the story?"} type="text" placeholder="Describe Here" required={vq2} onChange={() => { setVq2(true) }} />
                <InputText ref={inputRef3} title={"Why do you think the author wrote this book?"} type="text" placeholder="Describe Here" required={vq3} onChange={() => { setVq3(true) }} />
                <InputText ref={inputRef4} title={"What do you think is going to happen?"} type="text" placeholder="Describe Here" required={vq4} onChange={() => { setVq4(true) }} />
            </div>
            <Button title="Done" fontColor="white" height="50px" startFunction={QuesForm} />
        </>
    )
}