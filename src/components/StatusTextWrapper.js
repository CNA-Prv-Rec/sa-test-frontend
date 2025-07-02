  function StatusTextWrapper(props) {
    if (props.Status === 1) {
      return <td>Online</td>;
    }
    if (props.Status === 2)  {
      return <td>Starting</td>;
    }
    if (props.Status === 3) {
      return <td>Offline</td>;
    }
    if (props.Status === 4) {
      return <td>Shutting Down</td>;
    }
    return <td>Unknown</td>;
  }

  export default StatusTextWrapper