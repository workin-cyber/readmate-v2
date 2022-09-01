import "./style.css";
import { Link, Router } from "react-router-dom";

// Creator : Team A - Shahar

/**
 *
 * @param {{content : string , title:string , link:string} } props
 * @returns
 */

function SubTitleLogin(props) {

  return (
    <div className="sub-title-box">
      <div>
        <h4> {props.title}</h4>
      </div>
      <div className="sub-title">
        <span> {props.content}</span>
        <Link to={props.link}> Sign Up </Link>
      </div>
    </div>
  );
}

export default SubTitleLogin;
