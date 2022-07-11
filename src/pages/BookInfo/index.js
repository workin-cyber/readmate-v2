import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Common/Button"
import InputText from "../../components/Common/InputText";

function BookInfo(props) {
    const navigate = useNavigate();
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");

    const [bookValid, setBookValid] = useState(true)
    const [ganerValid, setGenreValid] = useState(true)


    function insertBook() {
        console.log("enter");
        console.log(bookName);
        if (bookName.trim().length == 0) {
            setBookValid(false)

        } else if (genre.trim().length == 0) {
            setGenreValid(false)
        } else {
            console.log("save in DB");

            const nevigateObject = {
                bookName: bookName,
                genre: genre,
                roundCounter: 1,
            };
            navigate("/train-reading/instructions", { state: { nevigateObject } });

        }
        // return data;
    };
    // };

    return (
        <>

            <div className={styles.bookInfo}>
                <InputText label="what book are you going to read?" type="text" placeholder="Type book name" value={bookName} valid={bookValid} onInput={(e) => { setBookValid(true); setBookName(e.target.value) }} />
                <InputText label="genre" type="text" placeholder="Type book genre" value={genre} valid={ganerValid} onInput={(e) => { setGenreValid(true); setGenre(e.target.value) }} />

            </div>
            <Button type="button" name="next" click={insertBook} />

        </>
    );
}

export default BookInfo;