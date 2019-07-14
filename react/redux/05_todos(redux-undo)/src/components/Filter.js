import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterByStatus } from "../acitons";

function Btn({ status, activeStatus, filter }) {
    let style = {};
    if (activeStatus === status) {
        style = { background: 'red', color: '#fff' };
    }
    return <button type="button" style={style} onClick={() => filter(status)}>{status}</button>
}
class Filter extends React.Component {

    static propTypes = {
        filter: PropTypes.func,
        activeStatus: PropTypes.string
    }

    render() {
        const { filter, activeStatus } = this.props;
        return (
            <div>
                <Btn status="all" activeStatus={activeStatus} filter={filter} />
                <Btn status="finished" activeStatus={activeStatus} filter={filter} />
                <Btn status="actived" activeStatus={activeStatus} filter={filter} />
            </div>
        );
    }
}

function mapState(state) {
    return {
        activeStatus: state.todoStatus
    }
}

function mapActions(dispatch) {
    return {
        filter: (todoStatus) => dispatch(filterByStatus(todoStatus))
    }
}

export default connect(mapState, mapActions)(Filter);
