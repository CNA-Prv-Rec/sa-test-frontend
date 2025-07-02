import StatusImageWrapper from "./StatusImageWrapper"
import StatusTextWrapper from "./StatusTextWrapper"

function Machine(props) {
    return <tr className="machine"><td>{props.SerialNo}</td><td><StatusTextWrapper Status = {props.Status} /></td><td><StatusImageWrapper Status={props.Status} /></td></tr>
}

export default Machine