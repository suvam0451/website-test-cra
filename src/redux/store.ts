import { createStore } from "redux"
import produce from "immer"

enum ECountReducerAction {
    INCREMENT,
    DECREMENT
}

type ICountReducerAction = {
    type: ECountReducerAction,
}

const countReducer = produce((state: number, action: ICountReducerAction) => {
    const { type } = action
    switch (type) {
        case ECountReducerAction.INCREMENT:
            return state + 1;
        case ECountReducerAction.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}, 0);

export default createStore(countReducer)
