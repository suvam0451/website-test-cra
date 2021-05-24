import { createStore } from "redux"
import produce from "immer"

export enum ECountReducerAction {
    INCREMENT = "COUNT_INCREMENT",
    DECREMENT = "COUNT_DECREMENT"
}

export enum ENotesReducerAction {
    ADD = "NOTES_INCREMENT",
    REMOVE = "NOTES_DECREMENT"
}

export type ICountReducerAction = {
    type: ECountReducerAction | ENotesReducerAction,
    payload: any
}

export type INotesState = {
    num: number
    notes: string[]
}

const countReducer = produce((state: INotesState, action: ICountReducerAction) => {
    // console.log(state);
    // console.log(action)

    const { type, payload } = action
    // console.log(type)
    switch (type) {
        case ECountReducerAction.INCREMENT:
            console.log("Count increment got called")
            state.num += 1;
            break;
        case ECountReducerAction.DECREMENT:
            console.log("Count decrement got called")
            state.num -= 1;
            break;
        case ENotesReducerAction.ADD:
            console.log("Notes append got called")
            state.notes.push(payload)
            break;
        case ENotesReducerAction.REMOVE:
            console.log("Notes deletion got called")
            break;
        default:
            return state;
    }
}, { num: 0, notes: [] });

export const store = createStore(countReducer)
