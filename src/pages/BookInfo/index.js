import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Common/Button"
import InputText from "../../components/Common/InputText";
import mainContext from "../../context/mainContext";

function BookInfo(props) {
    const { header } = useContext(mainContext)

    const navigate = useNavigate();
    const location = useLocation();
    const nevigateObject = location.state.nevigateObject;
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");

    const [bookValid, setBookValid] = useState(true)
    const [ganerValid, setGenreValid] = useState(true)

    useEffect(() => {
        header.setPageName(`Book Info`);
    }, [])


    function insertBook() {
        console.log(bookName);
        if (bookName.trim().length == 0) {
            setBookValid(false)

        } else if (genre.trim().length == 0) {
            setGenreValid(false)
        } else {
            console.log("save in DB");
            nevigateObject.bookName = bookName
            nevigateObject.genre = genre

            navigate("/tr/instructions", { state: { nevigateObject } });

        }
    };

    return (
        <>

            <div className={styles.bookInfo}>
                <InputText title="what book are you going to read?" type="text" placeholder="Type book name" value={bookName} required={bookValid} onChange={(e) => { setBookValid(true); setBookName(e.target.value) }} />
                <InputText title="genre" type="text" placeholder="Type book genre" value={genre} required={ganerValid} onChange={(e) => { setGenreValid(true); setGenre(e.target.value) }} />

            </div>
            <Button title="next" height="50px" startFunction={insertBook} fontColor={"white"} width={"85%"} />

        </>
    );
}

export default BookInfo;