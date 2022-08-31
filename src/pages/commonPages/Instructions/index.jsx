import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Common/Button'
import videoPlaceholder from "../../../assets/images/illustrations/videoPlaceholder.svg"
import { useContext, useEffect } from 'react'
import mainContext from '../../../context/mainContext'

const textFake = ["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  ", " web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]
const titleFake = "Payments are calculated at the end of every month for"

// Creator : Team h
function Instructions({ navigateTo, textList = textFake, title = titleFake, vidSrc }) {

    const navigate = useNavigate()

    const { header: { setPageName } } = useContext(mainContext)

    useEffect(() => { setPageName("Instructions") }, [])

    const onclick = () => navigate(navigateTo)

    return (
        <div className={styles.container}>
            <img src={videoPlaceholder} alt="video place holder" />
            <h2 >{title}</h2>
            {textFake?.map((text, i) => <p key={`k${i}`}>{text}</p>)}
            <Button title={"Next"} startFunction={onclick}></Button>
        </div>
    )
}

export default Instructions