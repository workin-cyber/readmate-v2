import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Common/Button"
import InputText from "../../components/Common/InputText";
import mainContext from "../../context/mainContext";

function BookInfo() {
    const { header } = useContext(mainContext)

    const navigate = useNavigate();
    const location = useLocation();
    // const navigateObject = location.state.navigateObject ?? { bookName: null, genre: null };

    const [bookValid, setBookValid] = useState(true)
    const [ganerValid, setGenreValid] = useState(true)

    const inputRef = useRef("");
    const inputGenreRef = useRef("");



    useEffect(() => {
        header.setPageName(`Book Info`);
    }, [])

    // change to useRef


    function insertBook() {
        if (inputRef.current.value.trim() == "" && inputGenreRef.current.value.trim() == "") {
            setBookValid(false)
            setGenreValid(false)
        }
        else if (inputRef.current.value.trim() == "") {
            setBookValid(false)
        }
        else if (inputGenreRef.current.value.trim() == "") {
            setGenreValid(false)
        }
        else {
            console.log(inputRef.current.value, inputGenreRef.current.value);
            navigate("/tr/instructions", { state: { bookName: inputRef.current.value, genre: inputGenreRef.current.value } });

        }



    };

    return (
        <>

            <div className={styles.bookInfo}>
                <InputText ref={inputRef} title="what book are you going to read?" type="text" placeholder="Type book name" required={bookValid} onChange={(e) => { setBookValid(true) }} />
                <InputText ref={inputGenreRef} title="genre" type="text" placeholder="Type book genre" required={ganerValid} onChange={(e) => { setGenreValid(true) }} />
            </div>
            <Button title="next" height="50px" startFunction={insertBook} fontColor={"white"} width={"85%"} />

        </>
    );
}

export default BookInfo;