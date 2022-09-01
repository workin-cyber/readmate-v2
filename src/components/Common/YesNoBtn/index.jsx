import React from 'react'
import styles from './style.module.css'
export default function YesBtn({ handleClickyes, handleClickno, yes, no }) {
    return (
        <div className={styles.buttons}>
            <button onClick={handleClickyes} >{yes}
            </button>
            <button onClick={handleClickno} >{no}
            </button>
        </div>
    )
}