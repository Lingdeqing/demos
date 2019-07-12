import React, {Component} from 'react';
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from "react-redux";


class Counter extends Component {
    static propTypes = {
        value: PropTypes.number,
        onIncClick: PropTypes.func
    }
    render(){
        const {value, onIncClick} = this.props;
        return <div>
            <label>{value}</label>
            <button onClick={onIncClick}>inc 1</button>
        </div>
    }
}

// action
const incAction = {
    type: 'inc'
}

// reducer
function counterReducer(state = {count: 0}, action){
    switch(action.type){
        case 'inc':
            return {
                count: state.count + 1
            }
        default: 
            return state;
    }
}

// store
const store = createStore(counterReducer);

// map state to props
function mapStateToProps(state){
    return {
        value: state.count
    }
}

// map actions to props
function mapDispatchToProps(dispatch){
    return {
        onIncClick: () => dispatch(incAction)
    }
}

// connect to component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));