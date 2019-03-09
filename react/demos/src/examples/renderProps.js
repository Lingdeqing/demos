import React from "react";

class Mouse extends　React.PureComponent {
    state = {
        x: 0,
        y: 0
    }

    handleMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render(){
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

function Cat({x, y}){
    return (
        <div style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            background: 'pink',
            left: x + 'px',
            top: y　+ 'px',
        }} />
    )
}

function withMouse(Component){
    return class extends React.Component{
        renderComponent({x, y}){
            return <Component x={x} y={y}/>
        }
        render(){
            return (
                <Mouse render={this.renderComponent}/>
            )
        }
    }
}

const MouseTracker = withMouse(Cat);

class App extends　React.Component {
    render(){
        return (
            <div style={{
                position: 'relative',
                height: '500px',
            }}>
                <MouseTracker />
            </div>
        )
    }
}

export default App