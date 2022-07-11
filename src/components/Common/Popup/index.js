// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";
// import dataContext from "../../../context/dataContext";
// import YesNoBtn from "../../Common/YesNoBtn";
// import mainContext from '../../../context/mainContext'



// export default function Popup({ bookDetails }) {
//     const { popup, setPopup } = useContext(mainContext)
//     const { userDetails } = useContext(dataContext);

//     const navigate = useNavigate();

//     const nevigateObject = {
//         bookName: userDetails.currentBook.name,
//         genre: userDetails.currentBook.genre,
//         roundCounter: 1,
//         lpm: userDetails.TR[userDetails.TR.length - 1].Value,
//         formInfo: {},
//         rateData: {
//             LPM: 0,
//             newLPM: 0,
//             round: 0,
//             justRight: false
//         }
//     };


//     const yes = () => {
//         setPopup(false);
//         navigate("/tr/instructions", { state: { nevigateObject } });
//     };
//     const no = () => {
//         setPopup(false);
//         navigate("/tr/book-info", { state: { nevigateObject } });
//     };

//     return (
//         <>
//             <div className={`overlay ${popup ? "" : "close"}`}>
//                 <div className="popup right back-purple">
//                     <div className="title">Reading Exercise</div>
//                     <div className="txt">Are you still reading {userDetails.currentBook.name}?</div>
//                     <div className=".btnPopup">
//                         <YesNoBtn handleClickyes={yes} handleClickno={no} yes={"yes"} no={"no"} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
