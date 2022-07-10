import "./style.css";

// Creator : Team H - batya
export default function RoundedButton(props) {
  return (
    <>
      {props.isplay ? (
        <button
          className="RoundedButton"
          onClick={() => {
            props.setIsPlay(!props.isplay);
          }}
        >
          ||
        </button>
      ) : (
        <button
          className="RoundedButtonPlay"
          onClick={() => {
            props.setIsPlay(!props.isplay);
          }}
        >
          ▶
        </button>
      )}
    </>
  );
}