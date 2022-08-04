import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FooterStart from "../../../../components/Common/StartFooter"
import mainContext from "../../../../context/mainContext";


function PushUpInstructions(props) {

//   const {pageName, setPageName} = useContext(pageNameContext);
const {header} = useContext(mainContext)
  const navigate = useNavigate();
  const location = useLocation();
  const navigateObject = location.state.navigateObject;
  const earphonesImg = require("../../../../assets/images/icons/FrameHeadPhone.png")


  let instructionsText, book;
  book = navigateObject.bookName;
  useEffect(()=>{
   header.setPageName(`Pushup ${navigateObject.roundCounter}/4`);
  },[])
  navigateObject.roundCounter === 4
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
        <FooterStart
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
//         <FooterStart
//           startFunction={startRound}
//           title="With your headphones on,"
//           explanation={instructionsText}
//         />
//       </div>
//     </>
//   );
// }

// export default PushUpInstructions;