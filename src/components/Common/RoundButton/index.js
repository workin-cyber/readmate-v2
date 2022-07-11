import "./style.css";

// Creator : Team H - batya
export default function RoundButton(props) {
  return (
    <>
      {props.isPlay ? (
        <button
          className="RoundedButton"
          onClick={() => {
            props.setIsPlay(!props.isPlay);
          }}
        >
          ▐▐
        </button>
      ) : (
        <button
          className="RoundedButtonPlay"
          onClick={() => {
            props.setIsPlay(!props.isPlay);
          }}
        >
          ▶
        </button>
      )}
    </>
  );
}