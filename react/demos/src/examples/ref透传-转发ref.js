import React from "react";

const store = {
    theme: 'dark',
    user: null
}

const Context = React.createContext(
    store
)

class ChildComponent extends　React.Component {
    inputRef = React.createRef();
    componentDidMount(){
        console.log(this.props.theme)
    }
    focus(){
        this.inputRef.current.focus();
    }
    render(){
        const {theme, user, setTheme} = this.props;
        return (
            <div>
                <p>theme: {theme}</p>
                <p>user: {user}</p>
                <input value={theme} onChange={(e) => setTheme(e.target.value)} ref={this.inputRef}/>
            </div>
        )
    }
}

const Child = React.forwardRef(function (props, ref){
    return (
        <Context.Consumer>
            {
                (ctx) => <ChildComponent ref={ref} {...props} {...ctx} />
            }
        </Context.Consumer>
    )
})

class Parent extends　React.Component {
    inputRef = React.createRef();

    focusInput = () => {
        this.inputRef.current.focus();
    }

    render(){
        return (
            <div>
                <p>parent</p>
                <Child ref={this.inputRef}/>
                <button onClick={this.focusInput}>focus input</button>
            </div>
        )
    }
}

class Grandparent extends　React.Component {
    state = {
        store
    }
    componentDidMount(){
        this.setState({
            store: {
                ...store,
                user: 'xxxxx'
            }
        })
    }
    render(){
        return (
            <div>
                <p>grandparent<input value={this.state.theme} onChange={(e) => this.setState({store: {...store, theme: e.target.value}})}/></p>
                <Context.Provider value={this.state.store}>
                    <Parent />
                </Context.Provider>
            </div>
        )
    }
}

export default Grandparent;