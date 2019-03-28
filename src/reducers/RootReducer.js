import { combineReducers } from 'redux'
import NotesReducer from './NotesReducer'

const rootReducer = combineReducers({
    NoteReducer: NotesReducer
});

export default rootReducer