import { useContext } from "react";

import nav from "../../../assets/images/icons/nav-icon.png";
import photoPic from "../../../assets/images/icons/userPhoto.png";
import mainContext from "../../../context/mainContext";

import styles from "./style.module.css";

//group c- yoav & yehoshua

export default function Header({ pageName }) {

  const { nav: { setIsShowNav } } = useContext(mainContext)

  const handleOpenNav = () => setIsShowNav(old => !old)


  return (
    <div className={styles["header"]}>
      <div className={styles["left"]} onClick={handleOpenNav}>
        <img src={nav} alt={styles["navbar"]}></img>
      </div>
      <div className={styles["mid"]}>{pageName}</div>

      <div className={styles["right"]}>
        <img src={photoPic} alt="User Name " />
      </div>
    </div>
  );
}
