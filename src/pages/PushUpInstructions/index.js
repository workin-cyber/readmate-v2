import styles from "./style.module.css";
import { useContext, useEffect } from "react";
//import Text from "../../../components/Common/Text";
import { useNavigate, useLocation } from "react-router-dom";
// import { pageNameContext } from "../../../components/layout/Layout";
//import SubmitBtn from "../../../components/Common/SubmitBtn";
import FooterStart from "../../components/Common/StartFooter"


function PushUpInstructions(props) {
const nevigateObject = {
  bookName: "*** bla bla bla***",
  genre: "genre",
  roundCounter: 1,
  lpm: 20,
};
//   const {pageName, setPageName} = useContext(pageNameContext);
  const navigate = useNavigate();
  const location = useLocation();
//   const nevigateObject = location.state.nevigateObject;

  let instructionsText, book;
  book = nevigateObject.bookName;
//   useEffect(()=>{
//     setPageName(`Pushup ${nevigateObject.roundCounter}/4`);
//   },[])
  nevigateObject.roundCounter === 4
  ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
  : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);

  const startRound = () => {
    navigate("/train-reading/timer", { state: { nevigateObject } });
  };

  return (
    <>
      {/* <Header /> */}
      <div style={{marginRight:"auto",marginLeft:"auto", width:"fit-content"}}>
        <img id="headphones" alt="" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <FooterStart
          startFunction={()=>startRound()}
          title="With your headphones on,"
          explanation={instructionsText}
        />
      </div>
    </>
  );
}

export default PushUpInstructions;

// const nevigateObject = {
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
//   const nevigateObject = null, book = '';
  
//   const startRound = () => {
//       navigate("/train-reading/timer", { state: { nevigateObject } });
//     };
//     let instructionsText = "";
    
//     // nevigateObject.roundCounter === 4
//     // ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
//     // : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
//     useEffect(()=>{
//        nevigateObject = location.state.nevigateObject
//        book = nevigateObject.bookName;
//        extractContext.setPageName(`Pushup ${nevigateObject.roundCounter}/4`);
//        nevigateObject.roundCounter === 4
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