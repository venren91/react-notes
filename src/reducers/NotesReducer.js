import { ADD_NOTE,DELETE_NOTE,DELETE_ALL_NOTE,EDIT_NOTE } from '../actions/NoteActions'

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
                //TODO add logic to remove note based on id
                updatedState = state;
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
                        var index = newNotes.findIndex(n => (n.id === action.id));
                        if(action.title !== undefined)                
                                newNotes[index].title = action.title;
                        if(action.content !== undefined)                                
                                newNotes[index].content = action.content;
                        updatedState =  {notes: newNotes };
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