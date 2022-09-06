import { useState, useContext, useEffect, } from "react";
import Button from "../../components/Common/Button";
import styles from './style.module.css'
import { useNavigate, useLocation } from "react-router-dom";
import mainContext from "../../context/mainContext";
import Input from "../../components/Common/Input/Input";
import { validate } from "../Signup/Signup/validate";


export default function FourQues() {
    const { header } = useContext(mainContext)
    const location = useLocation();
    const navigateObject = location.state.navigateObject;
    const navigate = useNavigate();
    const underline = require('../../assets/images/icons/UnderLine.png')
    const [valid, setValid] = useState([]);


    const getDatafromForm = (formData) => ({
        1: formData.get("1"),
        2: formData.get("2"),
        3: formData.get("3"),
        4: formData.get("4"),
    })


    useEffect(() => {
        header.setPageName(`Questions`);
        return () => header.setPageName(``);
    }, [])


    function handleSubmit(e) {
        e.preventDefault()

        const body = getDatafromForm(new FormData(e.currentTarget))
        const checkResult = validate(body)
        setValid(checkResult)

        if (checkResult.length) return;

        navigateObject.roundCounter++;

        let question = {
            type: "pushUp",
            answer: [{ 1: body["1"] }, { 2: body["2"] }, { 3: body["3"] }, { 4: body["4"] }]
        }

        navigateObject.questions.push(question)

        if (navigateObject.roundCounter <= 4) {
            console.log("not 4", navigateObject);
            navigate("/train-reading/pushup", { state: { navigateObject } })
        } else {
            console.log("4+", navigateObject);
            navigate("/train-reading/level-exercise", { state: { navigateObject } })
            // navigate("/tr/exercise", { state: { navigateObject } })
        }
    }


    return (
        <>
            <div className={styles.nTitle}>Instructions</div>
            <img src={underline} className={styles.nUnderLine} alt="" />
            <div className={styles.newText}>Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque.</div>
            <form onSubmit={handleSubmit} className={styles.fourQues}>
                <Input name={"1"} legend={"Who is the main character?"} type="text" content="Describe Here" valid={!valid.includes("1")} />
                <Input name={"2"} legend={"What can you say about the theme of the story?"} type="text" content="Describe Here" valid={!valid.includes("2")} />
                <Input name={"3"} legend={"Why do you think the author wrote this book?"} type="text" content="Describe Here" valid={!valid.includes("3")} />
                <Input name={"4"} legend={"What do you think is going to happen?"} type="text" content="Describe Here" valid={!valid.includes("4")} />
                <Button title="Done" fontColor="white" height="50px" />
            </form>
        </>
    )
}