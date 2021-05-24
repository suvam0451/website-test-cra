import { createStore } from "redux"
import produce from "immer"

enum ECountReducerAction {
    INCREMENT,
    DECREMENT
}

enum ENotesReducerAction {
    ADD,
    REMOVE
}

type ICountReducerAction = {
    type: ECountReducerAction | ENotesReducerAction,
    payload: any
}

type IState = {
    num: number
    notes: string[]
}

const countReducer = produce((state: IState, action: ICountReducerAction) => {
    const { type, payload } = action
    switch (type) {
        case ECountReducerAction.INCREMENT:
            state.num += 1;
            break;
        case ECountReducerAction.DECREMENT:
            state.num -= 1;
            break;
        case ENotesReducerAction.ADD:
            state.notes.push(payload)
            break;
        case ENotesReducerAction.REMOVE:
            break;
        default:
            return state;
    }
}, { num: 0, notes: [] });

export default createStore(countReducer)
