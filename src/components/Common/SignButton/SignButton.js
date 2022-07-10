import "./style.css";
// Creator : Team d - oriya
export default function SignButton(props) {
  return (
    <div className="btn-box">
      <button onClick={props.onClick} className="sign-button" type={props.type}>
        {" "}
        {props.content}
      </button>
    </div>
  );
}
