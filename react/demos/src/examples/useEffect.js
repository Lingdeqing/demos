import React, {useState, useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>add</button>
        </div>
    )
}
export default Counter