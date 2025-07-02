const StatusIndicator = props => (
    <span>
    <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
        <circle r="20" cx="30" cy="30" fill={props.fillColor} >
        </circle>
    </svg>
    {props.statusText}
    </span>

)

export default StatusIndicator