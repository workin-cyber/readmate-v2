import "./style.css";
import { Link, Router } from "react-router-dom";

// Creator : Team A - Shahar

/**
 *
 * @param {{content : string , title:string , link:string} } props
 * @returns
 */

function SubTitleLogin({ content, link, title, sign }) {

  return (
    <div className="sub-title-box">
      <div>
        <h4> {title}</h4>
      </div>
      <div className="sub-title">
        <p> {content}</p>
        {link && <Link to={link}> Sign {sign} </Link>}
      </div>
    </div>
  );
}

export default SubTitleLogin;
