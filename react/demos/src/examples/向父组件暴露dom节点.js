import React from "react";

class Child extends　React.Component {
    render(){
        return <input type="text" ref={this.props.anyNameExceptRef}/>
    }
}

class Parent extends　React.Component {
    inputRef = React.createRef();

    focusInput = () => {
        this.inputRef.current.focus();
    }

    render(){
        return (
            <div>
                <Child anyNameExceptRef={this.inputRef}/>
                <button onClick={this.focusInput}>focus</button>
            </div>
        )
    }
}

export default Parent