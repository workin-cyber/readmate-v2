import { useContext, useState } from "react";
import nav from "../../../assets/images/icons/nav-icon.png";
import photoPic from "../../../assets/images/icons/userPhoto.png";
import "./style.css";
// import { dataContext } from "../../../context/context";

//group c- yoav & yehoshua

export default function Header(props) {
  // const pageNameContextLocal = useContext(pageNameContext); //assuming context is in use
  //   const pageNameContextLocal = useContext(dataContext); //assuming context is in use
  //   const [navState, setNavState] = useState(false);
  //   console.log(pageNameContextLocal.pageName);

  return (
    <div className="header">
      <div className="left">
        <img src={nav} alt="navbar"></img>
      </div>
      <div className="mid">{props.pageName}</div>

      <div className="right">
        <img src={photoPic} alt="User Name " />
      </div>

      {/* <div>

            {!navState ? (
                <div onClick={() => { setNavState(false); }}>
                    <img src={nav} alt="" />
                </div>
            )
                :
                (<NavBar setClose={() => { setNavState(!navState); }} />)
            }
        </div> */}
    </div>
  );
}
