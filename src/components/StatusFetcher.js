import axios from "axios";
import React from "react";
import Machine from './Machine';

const baseURL = "https://localhost:7117/api/Machines/List" //change this if your back end is elsewhere.npm run


export default function StatusFetcher() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((Response) => {
            setData(Response.data);
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('request for data received an error back');
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log('bad request for data');
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    },[]);

    if (!data) return null;
    

    const listItems = data.map(machine => <Machine SerialNo = {machine.serialNo} Status={machine.status} /> );
    return listItems;
    

}