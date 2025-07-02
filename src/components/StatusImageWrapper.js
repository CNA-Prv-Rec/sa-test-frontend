import StatusIndicator from "./StatusIndicator";

//const StatusWrapper = props => {
  function StatusImageWrapper(props) {
    if (props.Status === 1) {
      return <StatusIndicator fillColor="green" />;
    }
    if (props.Status === 2)  {
      return <StatusIndicator fillColor="gold" />;
    }
    if (props.Status === 3) {
      return <StatusIndicator fillColor="red" />;
    }
    if (props.Status === 4) {
      return <StatusIndicator fillColor="grey" />;
    }
    return <StatusIndicator fillColor="white" />;
  }

  export default StatusImageWrapper