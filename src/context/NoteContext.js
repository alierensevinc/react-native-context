import React, {createContext, useReducer} from "react";

export const noteActions = {
    saveNote: (payload) => ({
        type: 'save_note',
        payload: payload
    }),
    updateNote: (payload) => ({
        type: 'update_note',
        payload: payload
    }),
    deleteNote: (payload) => ({
        type: 'delete_note',
        payload: payload
    }),
};


const noteReducer = (state, action) => {
    switch (action.type) {
        case 'save_note':
            return [...state, action.payload];
        case 'update_note':
            return state.map((note) => {
                console.log(action.payload);
                return note.id === action.payload.id ? action.payload : note
            });
        case 'delete_note':
            return state.filter((note) => {
                return note.id !== action.payload.id
            });
        default:
            return state;
    }
}

const initialState = [
    {
        id: 'note1',
        text: 'note1'
    },
    {
        id: 'note2',
        text: 'note2'
    }
];

const NoteContext = createContext(undefined);
const NoteDispatchContext = createContext(undefined);

const NoteProvider = ({children}) => {
    const [state, dispatch] = useReducer(noteReducer, initialState);

    return (
        <NoteContext.Provider value={state}>
            <NoteDispatchContext.Provider value={dispatch}>
                {children}
            </NoteDispatchContext.Provider>
        </NoteContext.Provider>
    );
}

export {NoteProvider, NoteContext, NoteDispatchContext};