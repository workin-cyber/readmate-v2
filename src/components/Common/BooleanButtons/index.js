import './style.css'

// Creator : Team F - Asael
/**
 * 
 * @param {{background:string,color:string,height:string,width:string }} props 
 * @returns 
 */
function TrueBtn(props) {
  return (
    <div>
      <button type="button" className='boolean-button' onClick={props.onClick} style={{height:props.height,width:props.width,color:props.color,background:props.background}}>
        {props.value}
      </button>
    </div>
  );
}

export default TrueBtn;
