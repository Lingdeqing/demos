import React from "react";

class MyComponent extends　React.Component {
    state = {
        name: '1'
    }

    setName(name){
        this.setState({
            name
        })
    }

    render(){
        return [<div key="state">state: {JSON.stringify(this.state)}</div>,
            <div key="props">props: {JSON.stringify(this.props)}</div>]
    }
}

function hoc(Component){
    return class extends　React.Component {
        render(){
            const {anyNameExceptRef, ...rest} = this.props;
            return <Component ref={anyNameExceptRef} {...rest} />
        }
    }
}

class App extends　React.Component {

    component = React.createRef();

    componentDidMount(){
        this.component.current.setName('hahaha')
    }

    render(){
        const Component = hoc(MyComponent);
        return <Component id="1" message="hahaha" anyNameExceptRef={this.component}/>
    }
}

export default App