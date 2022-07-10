import "./style.css";
import { AiOutlineGoogle } from "react-icons/ai";
import FramePencil from "../../../assets/images/icons/FramePencil.png";

// Creator : Team D - Dov
function FooterGoogle(props) {
  const CreateAccount = true;
  return (
    <div>
      <div className="footer-google">
        <div className="google-button">
          {" "}
          <AiOutlineGoogle className="google-icon" />
          <p>Sign Up With Google</p>
        </div>
      </div>
      {CreateAccount && (
        <div className="FramePencil">
          <img src={FramePencil} alt="" />
        </div>
      )}
    </div>
  );
}

export default FooterGoogle;
