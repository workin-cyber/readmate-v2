
import styles from './style.module.css'

// Creator : Team A - Amos
function QuestionBoard({ result, question, saveAnswer }) {
    const isActive1 = result.find(a => a.orderNum === question.orderNum)

    return (
        <div className={`${styles.QuestionBoard} two-colored-div`}>
            <div className={styles.QuestionBoardText}><p>{question.title}</p></div>
            <div className={styles.buttons}>
                <button onClick={() => saveAnswer(question.orderNum, true)} className={`${isActive1 && isActive1.answer === true ? styles.active : null}`}>true
                </button>
                <button onClick={() => saveAnswer(question.orderNum, false)} className={`${isActive1 && isActive1.answer === false ? styles.active : null}`}>false
                </button>
            </div>
        </div>)
}


export default QuestionBoard