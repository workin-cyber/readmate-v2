import styles from "./style.module.css";

import { BsColumnsGap } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { NavButton } from "../NavButton/NavButton";
import { BiArrowBack } from "react-icons/bi";

import { useContext } from "react";
import mainContext from "../../../context/mainContext";

import img1 from "./image 1.svg"
import img2 from "./image 2.svg"
import { Link } from "react-router-dom";
import dataContext from "../../../context/dataContext";

// creator: shmuel asherov team-f
export const NavBar = () => {
  const { nav: { setIsShowNav } } = useContext(mainContext)

  const handleOpenNav = () => setIsShowNav(old => !old)

  const { setUserDetails } = useContext(dataContext)

  const signOut = () => setUserDetails()


  return (
    <div className={`${styles.opacity}`}>
      <NavBackButt setClose={handleOpenNav} />
      <div className={`${styles.box}`} >
        <ul>
          <li className={`${styles.logo}`}>
            <Link to={"/"} onClick={handleOpenNav}>
              <img src={img1} alt="logo" />
              <img src={img2} alt="logo" />
            </Link>
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={<BsColumnsGap className={`${styles.icon}`} size="30px" />}
              text="Dashboard"
              link="/"
            />
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={<FiSettings className={`${styles.icon}`} size="30px" />}
              text="Settings"
              link="setting"
            />
          </li>
          <li>
            <NavButton
              onClick={handleOpenNav}
              icon={
                <FaRegAddressBook className={`${styles.icon}`} size="30px" />
              }
              text="Contact Us"
              link="contact-us"
            />
          </li>
          <li>
            <NavButton
              onClick={signOut}
              icon={<MdLogout className={`${styles.icon}`} size="30px" />}
              text="Sign Out"
              link="/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};


const NavBackButt = ({ setClose }) =>
  <div type="button" className={styles["arrow"]} onClick={setClose}>
    <BiArrowBack />
  </div>