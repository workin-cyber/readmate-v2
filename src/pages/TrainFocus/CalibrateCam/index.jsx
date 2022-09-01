import styles from './Style.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainContext from '../../../context/mainContext';
import Button from '../../../components/Common/Button';


//TODO where to save the result ? its ment to be in local storage

// Creator : Team G - Orit F  
function CalibrateCam() {
  const halfImgWidth = 50
  const rightMargin = halfImgWidth - 30
  const leftMargin = halfImgWidth + 30

  const [posX, setPosX] = useState(window.innerWidth / 2 - halfImgWidth);
  const navigate = useNavigate();

  const { header: { setIsShowHeader } } = useContext(mainContext);

  useEffect(() => {
    setIsShowHeader()
    return () => setIsShowHeader(true)
  }, [])


  const touch = (e) => {
    if (e.changedTouches[0].clientX <= 0)
      return setPosX(0 - rightMargin)

    else if (e.changedTouches[0].clientX >= window.innerWidth)
      return setPosX(window.innerWidth - leftMargin)

    else
      setPosX(e.changedTouches[0].clientX - halfImgWidth);
  };


  const touchEnd = (e) => {
    console.log("window.innerWidth: " + window.innerWidth)

    if (e.changedTouches[0].clientX <= 0)
      return setPosX(0 - rightMargin)

    if (e.changedTouches[0].clientX >= window.innerWidth)
      return setPosX((window.innerWidth - leftMargin))

    setPosX(e.changedTouches[0].clientX - halfImgWidth);
  };

  const onClickBtn = () => {
    localStorage.setItem('posX', posX);
    console.log("send posX to DB. current posX=" + posX)
    navigate('/train-focus/StartFocus');
  }

  return (
    <div className={styles['calibrateCam']}>
      <div className={styles['arrowMove2']} >

        <div className={styles['place']} style={{ left: posX + 'px' }}
          onTouchMove={(e) => touch(e)}
          onTouchEnd={(e) => touchEnd(e)}
          draggable="false">
          <img className={styles['dragImg']} src={require("./moveDot.png")} alt="" />
        </div>
      </div>

      <div className={styles['arrowMove']}>
        <span>Slide the arrow left/right so that it points at your camera</span>
      </div>
      <button onClick={onClickBtn} className={styles["btnContinue"]}>continue</button>
    </div>
  );
}


export default CalibrateCam