import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input/Input";
import mainContext from "../../../context/mainContext";
import { validate } from "../../Signup/Signup/validate";
import styles from "./style.module.css";

function BookInfo() {
    const { header } = useContext(mainContext)

    const navigate = useNavigate();
    const [valid, setValid] = useState([]);

    useEffect(() => {
        header.setPageName(`Book Info`);
        return () => header.setPageName(``);
    }, [])


    const getDatafromForm = (formData) => ({
        bookName: formData.get("bookName"),
        genre: formData.get("genre")
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = getDatafromForm(new FormData(e.currentTarget))

        const checkResult = validate(body)

        setValid(checkResult)

        if (checkResult.length) return;

        try {
            // const { data } = await axios.post( "http://localhost:3001/api/users/register", formData);
            // navigate("../classroom", { replace: true, state: body });
            navigate("/train-reading/instructions", { state: body });
            console.log(body);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.bookInfo}>
            <Input
                legend="what book are you going to read?"
                content="Type book name"
                type="text"
                name="bookName"
                valid={!valid.includes("bookName")}
            />
            <Input
                legend="Genre"
                content="Type genre name"
                type="text"
                name="genre"
                valid={!valid.includes("genre")}
            />

            <div className="btnHolder">
                <Button title="next" height="50px" fontColor={"white"} width={"85%"} />
            </div>
        </form>
    );
}

export default BookInfo;