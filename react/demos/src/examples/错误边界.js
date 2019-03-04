import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, info){
        // log
    }

    render(){
        if(this.state.hasError){
            return <div>出错了!!!</div>
        }
        return this.props.children;
    }
}

class MyComponent extends React.Component{
    render(){
        const {a, b} = this.props;
        if(b == 0){
            throw new Error('被除数不能为0')
        }
        return (
            <div>
                {a / b}
            </div>
        )
        
    }
}
export default class Dialog extends React.Component{
    state = {
        a: 1,
        b: 2
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        const {a, b} = this.state;
        return (
            <ErrorBoundary>
                <input type="text" name="a" value={a} onChange={this.handleChange} key="a"/>
                <input type="text" name="b" value={b} onChange={this.handleChange} key="b"/>
                <MyComponent a={a} b={b}/>
            </ErrorBoundary>
        )
    }
}