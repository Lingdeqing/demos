import React from "react";

function Child(){
    return (
        // <React.Fragment>
        <>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </>
        // </React.Fragment>
    )
}

export default function Parent(){
    return (
        <ul>
            <Child />
        </ul>
    )
}