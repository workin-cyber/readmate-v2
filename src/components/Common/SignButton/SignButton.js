import "./style.css";

// Creator : Team d - oriya
export default function SignButton({ onClick, content, type }) {
  return (
    <div className="btn-box">
      <button onClick={onClick} className="sign-button" type={type}>
        {content}
      </button>
    </div>
  );
}
