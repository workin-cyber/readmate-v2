import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

// Creator : Team A - Amos
function QuestionBoard({ setResult, result, i, title,arr }) {
    const [isActive, setIsActive] = useState(false);
    const isActive1 = arr[i+1]?.answer

    // console.log(isActive1, "keren", i);

    const handleClick = () => {
        setResult([...result, { title: "", orderNum: (i + 1), answer: true }])
        console.log(result)

    }
    const handleClick2 = () => {
        setResult([...result, { title: "", orderNum: (i + 1), answer: false }])
        console.log(result)
    }
    // const Answer=()=>{
    //     setResult([...result, { title: "", orderNum: (i + 1), answer: true }])


    // }
    // const [result,setResult]=useState()

    return <>
        <div className={`${styles.QuestionBoard} back-purple left`}>
            <div className={styles.QuestionBoardText}><p>{title}</p></div>
            <div className={styles.buttons}>
                <button  onClick={handleClick} className={`${isActive1 === true ? styles.active : null}`}>true
                </button>
                <button onClick={handleClick2} className={`${isActive1 === false ? styles.active : null}`}>false
                </button>
            </div>
        </div>
    </>
}


export default QuestionBoard