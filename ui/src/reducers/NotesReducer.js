import { ADD_NOTE,DELETE_NOTE,DELETE_ALL_NOTE,EDIT_NOTE,SAVE_ALL_NOTE } from '../actions/NoteActions'

const initialState = {
                        notes: [ {id: 1, title:"first sample note", content:"sample content. edit to continue"} ]
                     }

const NotesReducer = (state = initialState,action) => {
    var updatedState = {};
    switch(action.type){
        case ADD_NOTE: {
                        var updatedNotes = [...state.notes, {
                        id: state.notes.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
                        title: action.title,
                        content: action.content
                        }]
                        updatedState = {notes: updatedNotes};
                        break;
        }

        case DELETE_NOTE: {
                var currentNotes = [].concat(state.notes);
                let index = currentNotes.findIndex(n => (n.id === action.id));
                currentNotes.splice(index, 1);
                updatedState = {notes: currentNotes};
                break;
        }
        
        case DELETE_ALL_NOTE:{ 
                updatedState=  {notes:[]};
                break;
        }

        case EDIT_NOTE: {
                var newNotes = [].concat(state.notes);
                if(newNotes !== undefined)
                {
                        let index = newNotes.findIndex(n => (n.id === action.id));
                        if(action.title !== undefined)                
                                newNotes[index].title = action.title;
                        if(action.content !== undefined)                                
                                newNotes[index].content = action.content;
                        updatedState =  {notes: newNotes };
                }
                break;
        }

        case SAVE_ALL_NOTE: {
                var notesToBeSaved = state.notes;
                if(notesToBeSaved !== undefined)
                {
                        updatedState =  {notes: notesToBeSaved };
                }
                break;
        }
          
        default: {
                updatedState =  state;
                break;
        }
    }
    console.log("updated state ")
    console.log(updatedState)
    return updatedState;
}

export default NotesReducer;