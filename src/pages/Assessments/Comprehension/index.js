import styles from './style.module.css'
import TitleRead from '../../../components/common/TitleRead'
import SubmitBtn from '../../../components/common/SubmitBtn'
import { useContext, useEffect, useState } from 'react'
import '../../../components/api/UmooveApi'
// import { Link } from 'react-router-dom'
import UmooveApi from '../../../components/api/UmooveApi'
import examImg from './image/exam.jpg'
import { useNavigate, useLocation } from 'react-router-dom';

// Creator : Team A - Amos
// const [pageName, setPageName] = useContext(pageNameContext)

function Page4() {
    const l = useLocation()
    console.log(l);
    const navigate = useNavigate()

    const nextPage = () => {
        navigate('/teama/page5', { state: { exam: exams } });
        console.log("clicked");
        // UmooveApi.API_stopReading();//לבדוק
        // UmooveApi.API_stopUmoove();
        console.log({ exam: exams });
    }
    // 
    useEffect(() => { UmooveApi.API_startReading() }, [])

    let exams = [
        {
            img: "text-7-76.png",
            level: 7,
            words: 117,
            questions:
                [
                    {
                        title: "Before the 1840s, all guns were of the single shot type",
                        orderNum: 1,
                        answer: true
                    },
                    {
                        title: "The main weakness of early rifles was their slow loading",
                        orderNum: 2,
                        answer: true
                    },
                    {
                        title: "Samuel colt was afraid of guns when he was young",
                        orderNum: 3,
                        answer: false
                    },
                    {
                        title: "He was working on board ship when he started on his invention",
                        orderNum: 4,
                        answer: true
                    },
                    {
                        title: "Colt's first revolver could shoot five times without reloading",
                        orderNum: 5,
                        answer: true
                    },
                    {
                        title: "The revolving shell chamber was inspired by the ship's compass",
                        orderNum: 6,
                        answer: false
                    },
                    {
                        title: "Colt's first factory was a huge success",
                        orderNum: 7,
                        answer: false
                    },
                    {
                        title: "The six-shooter was developed at the time of the Mexican War",
                        orderNum: 8,
                        answer: true
                    },
                    {
                        title: "The Army placed an order with Colt for two thousand revolvers",
                        orderNum: 9,
                        answer: false
                    },
                    {
                        title: "The six-shooter was call 'The gun that won the West'",
                        orderNum: 10,
                        answer: true
                    }

                ],
            lines:
                [
                    {
                        orderNum: 1,
                        chars: 37,
                    },
                    {
                        orderNum: 2,
                        chars: 39,
                    },
                    {
                        orderNum: 3,
                        chars: 38,
                    },
                    {
                        orderNum: 4,
                        chars: 31,
                    },
                    {
                        orderNum: 5,
                        chars: 34,
                    },
                    {
                        orderNum: 6,
                        chars: 37,
                    },
                    {
                        orderNum: 7,
                        chars: 37,
                    },
                    {
                        orderNum: 8,
                        chars: 38,
                    },
                    {
                        orderNum: 9,
                        chars: 37,
                    },
                    {
                        orderNum: 10,
                        chars: 36,
                    },
                    {
                        orderNum: 11,
                        chars: 33,
                    },
                    {
                        orderNum: 12,
                        chars: 36,
                    },
                    {
                        orderNum: 13,
                        chars: 35,
                    },
                    {
                        orderNum: 14,
                        chars: 38,
                    },
                    {
                        orderNum: 15,
                        chars: 37,
                    },
                    {
                        orderNum: 16,
                        chars: 32,
                    }
                ]
        }
    ]

    return <>
        <div className="Page4" >
            {/* //Header - import whith props - "comprehensions" */}
            <div className="TitleRead">
                <TitleRead />
            </div>
            <div>
                <img className={styles.img} src={examImg} alt="" />
            </div>
            {/* //scrollbar
        //bottom button "done" - import whith props */}

            <SubmitBtn startFunction={() => { nextPage() }} name={"Done"} />
        </div>
    </>
}

export default Page4