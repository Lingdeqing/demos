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

class ChildComponent1 extends　React.Component {
    componentDidMount(){
        console.log(this.props.theme)
    }
    render(){
        const {theme, user, setTheme} = this.props;
        return (
            <div>
                <p>theme: {theme}</p>
                <p>user: {user}</p>
                <input value={theme} onChange={(e) => setTheme(e.target.value)}/>
            </div>
        )
    }
}

class ChildComponent2 extends　React.Component {
    componentDidMount(){
        console.log(this.props.theme)
    }
    render(){
        const {theme, user, setTheme} = this.props;
        return (
            <div>
                <p>theme: {theme}</p>
                <p>user: {user}</p>
                <input value={theme} onChange={(e) => setTheme(e.target.value)}/>
            </div>
        )
    }
}

function withContext(Component){
    return function(props){
        return (
            <Context.Consumer>
                {
                    (ctx) => <Component {...props} {...ctx} />
                }
            </Context.Consumer>
        )
    }
}

const Child1 =　withContext(ChildComponent1)
const Child2 =　withContext(ChildComponent2)

class Parent extends　React.Component {

    // 不会阻断context的更新
    shouldComponentUpdate(){
        return false;
    }
    
    render(){
        return (
            <div>
                <p>parent</p>
                <Child1 />
                <Child2 />
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