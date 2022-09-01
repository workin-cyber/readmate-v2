import styles from "./style.module.css";

import { BsColumnsGap } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { NavButton } from "../NavButton/NavButton";

import { useContext } from "react";
import mainContext from "../../../context/mainContext";
import NavBackButt from "../navBackButt";

import img1 from "./image 1.svg"
import img2 from "./image 2.svg"
import { Link } from "react-router-dom";

// creator: shmuel asherov team-f
export const NavBar = () => {
  const { nav: { setIsShowNav } } = useContext(mainContext)

  const handleOpenNav = () => setIsShowNav(old => !old)

  return (
    <div className={`${styles.opacity}`}>
      <NavBackButt setClose={handleOpenNav} />
      <div className={`${styles.box}`} >
        <ul>
          <li className={`${styles.logo}`}>
            <Link to={"/"}>
              <img src={img1} alt="logo" />
              <img src={img2} alt="logo" />
            </Link>
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={<BsColumnsGap className={`${styles.icon}`} size="30px" />}
              text="Dashboard"
              link="Dashboard"
            />
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={<FiSettings className={`${styles.icon}`} size="30px" />}
              text="Settings"
              link="Settings"
            />
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={
                <FaRegAddressBook className={`${styles.icon}`} size="30px" />
              }
              text="Contact Us"
              link="Contact Us"
            />
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={<MdLogout className={`${styles.icon}`} size="30px" />}
              text="Sign Out"
              link="Sign Out"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
