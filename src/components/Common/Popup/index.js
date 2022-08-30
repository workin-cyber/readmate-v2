import { useContext } from "react";
import "./style.css";
import mainContext from '../../../context/mainContext'


export default function Popup({ children }) {
    const { popup } = useContext(mainContext)

    return (
        <>
            <div className={`overlay ${popup.popup ? "" : "close"}`}>
                <div className="popup right back-purple">
                    {children}
                </div>
            </div>
        </>
    );
}
