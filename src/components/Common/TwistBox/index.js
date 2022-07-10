import "./style.css";
/**
 * 
 * @param {{height:string,width:string,transform:string,background:string}} props 
 * @returns 
 */
function TwistBox(props) {
  return (
    
    <>
      <div className="placebox">
        <div className="box boxbehind" style={{height:props.height,width:props.width,transform:props.transform}}></div>
        <div className="box"  style={{height:props.height,width:props.width, background:props.background}}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default TwistBox;
