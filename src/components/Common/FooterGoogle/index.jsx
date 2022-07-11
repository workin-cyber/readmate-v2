import "./style.css";
import { AiOutlineGoogle } from "react-icons/ai";

// Creator : Team D - Dov
function FooterGoogle() {
  return (
    <>
      <div className="footer-google">
        <div className="google-button">
          {" "}
          <AiOutlineGoogle className="google-icon" />
          <p>Sign Up With Google</p>
        </div>
      </div>
    </>
  );
}

export default FooterGoogle;
