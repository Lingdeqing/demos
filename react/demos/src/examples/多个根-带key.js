import React from "react";

export default function Parent(){
    const items = new Array(5);
    items.fill(0);
    return (
        <dl>
            {
                items.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <dt>111</dt>
                            <dd>222</dd>
                        </React.Fragment>
                    )
                })
            }
        </dl>
    )
}