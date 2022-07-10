import "./style.css";
// Creator : Team d - oriya

export default function SelectInput(props) {
  return (
    <div className="select-box">
      <fieldset className="border">
        <select className="option" onChange={props.onChange}>
          <option value="00">{props.title}</option>
          {props.options.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
