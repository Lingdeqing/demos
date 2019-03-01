import React from "react";

const store = {
    theme: 'dark',
    user: null
}

const Context = React.createContext(
    store
)

class Child extends　React.Component {
    render(){
        return (
            <Context.Consumer>
                {
                    (i) => {
                        console.log(i)
                        return <p>child{JSON.stringify(i)}</p>
                    }
                }
            </Context.Consumer>
        )
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
                <p>parent</p>
                <Child />
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