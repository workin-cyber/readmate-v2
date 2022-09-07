
import React, { useContext, useEffect } from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/Common/QuestionBoard'

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Common/Button';
import mainContext from '../../../context/mainContext';


// import Calc from '../Calc';

export default function ComprehensionTest() {
    const [result, setResult] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const { header: { setPageName } } = useContext(mainContext)

    useEffect(() => {
        setPageName("Comprehension Test")
        return () => setPageName("")
    }, [])


    function Calc() {
        // server
        const numberOfLettersPerLine = [40, 50, 44, 80, 54, 75, 42, 14];
        //from api
        const timePerLine = [5000, 8000, 7000, 1000, 2000, 3000];
        numberOfLettersPerLine.pop();
        numberOfLettersPerLine.shift();
        let wpm = [];
        let sum = 0;

        for (let i = 0; i < timePerLine.length; i++) {
            wpm.push(numberOfLettersPerLine[i] / 5 / ((timePerLine[i] / 1000) * 60));
            sum += timePerLine[i];
        }

        console.log("wpm", wpm);
        let avg = sum / timePerLine.length;
        let std = 0;

        for (let i = 0; i < wpm.length; i++)
            std += (wpm[i] - avg) ** 2;

        std = std ** 0.5;
        console.log("avg:" + avg);
        console.log("std:" + std);
        return [wpm, std, avg]
    }



    const checkResults = () => {
        const score = data.exam[0].questions.reduce((acc, currQuest) =>
            result.find(a => a.orderNum === currQuest.orderNum)?.answer === currQuest.answer ?
                ++acc :
                acc
            , 0)

        const a = Calc()

        navigate('/assessments/result', { state: { count: score, WPM: a[0], STD: a[1], AVG: a[2], from: "assessments" } })
    }


    const saveAnswer = (orderNum, answerBool) => {
        const temp = JSON.parse(JSON.stringify(result));
        const found = temp.find(a => a.orderNum === orderNum)
        found ? found.answer = answerBool : temp.push({ orderNum, answer: answerBool })
        setResult(temp)
    }

    return (
        <div className={styles.container}>
            <div className={styles.questions}>
                {data.exam[0].questions.map((question, i) =>
                    <QuestionBoard
                        saveAnswer={saveAnswer}
                        question={question}
                        key={i}
                        result={result}
                    />
                )}
            </div>
            <div className={styles.submitDiv}>
                <Button disabled={result.length !== 10} startFunction={checkResults} title='next' />
            </div>
        </div>
    )
}
