import React from "react";
import ReactDOM from "react-dom";

export default class Dialog extends React.Component{
    render(){
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '400px',
            background: 'pink',
            color: '#fff',
        }
        return ReactDOM.createPortal(
            (
            <div style={style}>
                弹窗
            </div>
            ),
            document.body
        )
    }
}