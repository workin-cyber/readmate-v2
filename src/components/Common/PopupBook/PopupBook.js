import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import YesNoBtn from "../../Common/YesNoBtn";
import mainContext from '../../../context/mainContext'


export default function PopupBook({ bookName, genre }) {
    const { popup } = useContext(mainContext)


    const navigate = useNavigate();



    const doing = (path) => {
        popup.setPopup();
        navigate("/tr/" + path, { state: { bookName, genre } });
    };

    return (
        <>

            <div className="title">Reading Exercise</div>
            <div className="txt">Are you still reading {bookName}?</div>
            <div className=".btnPopup">
                <YesNoBtn handleClickyes={() => doing("instructions")} handleClickno={() => doing("book-info")} yes={"yes"} no={"no"} />

            </div>
        </>
    );
}