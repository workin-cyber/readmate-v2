import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StartFooter from "../../../../components/Common/StartFooter"
import mainContext from "../../../../context/mainContext";
import dataContext from "../../../../context/dataContext";


function PushUpInstructions() {
  
  const {header} = useContext(mainContext)
  const { userDetails } = useContext(dataContext);
  const navigate = useNavigate();
  const location = useLocation();


  const earphonesImg = require("../../../../assets/images/icons/FrameHeadPhone.png")
  let navigateObject;
  if (!location.state.navigateObject){

    navigateObject = {
         bookName:location.state.bookName,
         genre:location.state.genre,
         roundCounter: 1,
         lpm: userDetails.TR[userDetails.TR.length - 1].Value,
         rateData: {
           LPM: 0,
             newLPM: 0,
             round: 0,
             justRight: false
         },
         questions: []
       };
  }
  
  else{

    navigateObject = location.state.navigateObject;
  }
      


  let instructionsText, book;
  book = navigateObject.bookName;
  useEffect(()=>{
   header.setPageName(`Pushup ${navigateObject.roundCounter}/4`);
  },[])
  navigateObject?.roundCounter === 4
  ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
  : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);

  const startRound = () => {
    navigate("/tr/timer", { state: { navigateObject } });
  };

  return (
    <>
     
         <div className={styles.centerImg}>
        <div id="headphones" alt="" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <StartFooter
          startFunction={()=>startRound()}
        title="Start Now"
          subtitle = "With your headphones on,"
          explanation={instructionsText}
          img = {earphonesImg}

        />
      </div>
    </>
  );
}

export default PushUpInstructions;

// const navigateObject = {
//   bookName: "bookName",
//   genre: "genre",
//   roundCounter: 1,
//   lpm: 20,
// };

//let book = null;
// Creator : Team B - Ayellet & Hodaya
// function PushUpInstructions(props) {
//    // debugger;
//   const extractContext = useContext(pageNameContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const navigateObject = null, book = '';
  
//   const startRound = () => {
//       navigate("/train-reading/timer", { state: { navigateObject } });
//     };
//     let instructionsText = "";
    
//     // navigateObject.roundCounter === 4
//     // ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
//     // : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
//     useEffect(()=>{
//        navigateObject = location.state.navigateObject
//        book = navigateObject.bookName;
//        extractContext.setPageName(`Pushup ${navigateObject.roundCounter}/4`);
//        navigateObject.roundCounter === 4
//     ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
//     : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
//    },[])
//   return (
//     <>
//       {/* <Header /> */}
//       <div>
//         <img id="headphones" alt="" className={styles.headphones} />
//       </div>
//       <div id="playDiv">
//         <StartFooter
//           startFunction={startRound}
//           title="With your headphones on,"
//           explanation={instructionsText}
//         />
//       </div>
//     </>
//   );
// }

// export default PushUpInstructions;