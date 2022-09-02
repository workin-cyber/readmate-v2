import UmooveApi from "../../../components/api/UmooveApi";
import { useContext, useEffect, useState } from 'react'
import "./style.css"
import arrow from "./arrows.svg"
import { useNavigate } from 'react-router-dom'
import Button from "../../../components/Common/Button";
import mainContext from "../../../context/mainContext";


function Exercise() {

  // UmooveApi.API_loadUmooveLibrary().then(() => {
  // }).catch((error) => { console.error(error) })
  // UmooveApi.API_startUmoove()

  const [side, setSide] = useState(0)
  const [DailyStoppingDistance, setDailyStoppingDistance] = useState(0)
  const [StoppingDistance, setStoppingDistance] = useState(0);
  const navigate = useNavigate()

  const RoundNumber = localStorage.RoundNumber ? Number(localStorage.RoundNumber) : 1

  const { header: { setIsShowHeader } } = useContext(mainContext);

  useEffect(() => {
    setIsShowHeader()
    return () => setIsShowHeader(true)
  }, [])


  function Round() {
    if (RoundNumber === 5) {
      const distance = UmooveApi.API_getDistance()
      setDailyStoppingDistance((DailyStoppingDistance + distance) / 4)
      // setDailyStoppingDistance(DailyStoppingDistance / 4)
      UmooveApi.API_stopUmoove()
      console.log(UmooveApi.API_getDistance());
      console.log(DailyStoppingDistance);
      localStorage.removeItem("RoundNumber")
    }
    else {
      const distance = UmooveApi.API_getDistance()
      // setStoppingDistance(UmooveApi.API_getDistance())
      console.log(distance);
      setDailyStoppingDistance(DailyStoppingDistance + distance)
      console.log(DailyStoppingDistance);
    }

    // if (RoundNumber > 5) 
    navigate(RoundNumber < 5 ? '/train-focus/start-focus' : '/train-focus/result')
  }

  useEffect(() => {
    // const toCenterlize =
    setInterval(() => {
      setSide(UmooveApi.API_getAlignment())
    }, 10)
  }, [])

  //TODO -  ה200 הוא פייק. לקבל משתנה מאורית
  localStorage.setItem("posX", 200);

  switch (side) {
    case 0:
      return <>
        <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
        <div className="bo">
          <Button title="stop" startFunction={Round} />
        </div>
      </>

    case 1:
      return <>
        <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
        <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div>
          <img className="flip_img_left" src={arrow} alt="img" />
        </div>
        <Button title="stop" startFunction={Round} />
      </>

    case -1:
      return <>
        <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
        <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
          <img className="flip_img_right" src={arrow} alt="img" />
        </div>
        <Button title="stop" startFunction={Round} />
      </>

    default:
      return null
  }
}


export default Exercise
