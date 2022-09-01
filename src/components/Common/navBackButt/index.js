import "./style.css";
import { BiArrowBack } from "react-icons/bi";


const NavBackButt = (props) => {
  return (
    <div type="button" className="ArrowButt" onClick={props.setClose}>
      <BiArrowBack />
    </div>
  );
};

export default NavBackButt
