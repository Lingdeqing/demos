import React from "react";

const store = {
    theme: 'dark',
    user: null,
    setTheme(theme){
        store.theme = theme;
    }
}

const Context = React.createContext(
    store
)

class Child extends　React.Component {
    render(){
        return (
            <Context.Consumer>
                {
                    ({theme, user, setTheme}) => {
                        return (
                            <div>
                                <p>theme: {theme}</p>
                                <p>user: {user}</p>
                                <input value={theme} onChange={(e) => setTheme(e.target.value)}/>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

class Parent extends　React.Component {

    shouldComponentUpdate(){
        return false;
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
    setTheme = (theme) => {
        this.setState({
            store: {
                ...store,
                theme,
            }
        })
    }
    render(){
        return (
            <div>
                <p>grandparent<input value={this.state.store.theme} onChange={(e) => this.setTheme(e.target.value)}/></p>
                <Context.Provider value={{...this.state.store, setTheme: this.setTheme}}>
                    <Parent />
                </Context.Provider>
            </div>
        )
    }
}

export default Grandparent;