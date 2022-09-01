import { useContext, useState } from "react";
import nav from "../../../assets/images/icons/nav-icon.png";
import photoPic from "../../../assets/images/icons/userPhoto.png";
import mainContext from "../../../context/mainContext";
import "./style.css";
// import { dataContext } from "../../../context/context";

//group c- yoav & yehoshua

export default function Header(props) {

  const { nav: { setIsShowNav } } = useContext(mainContext)

  const handleOpenNav = () => setIsShowNav(old => !old)


  return (
    <div className="header">
      <div className="left" onClick={handleOpenNav}>
        <img src={nav} alt="navbar"></img>
      </div>
      <div className="mid">{props.pageName}</div>

      <div className="right">
        <img src={photoPic} alt="User Name " />
      </div>
    </div>
  );
}
