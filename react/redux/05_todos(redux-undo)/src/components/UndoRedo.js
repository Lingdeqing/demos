import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";

function UndoRedo({ undo, redo, canUndo, canRedo }) {
    return <p>
        <button type="button" disabled={!canRedo} onClick={redo}>redo</button>
        <button type="button" disabled={!canUndo} onClick={undo}>undo</button>
    </p>
}

function mapState(state) {
    return {
        canRedo: state.future.length > 0,
        canUndo: state.past.length > 0,
    }
}
function mapActions(dispatch) {
    return {
        redo: () => dispatch(ActionCreators.redo()),
        undo: () => dispatch(ActionCreators.undo())
    }
}

export default connect(mapState, mapActions)(UndoRedo);