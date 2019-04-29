export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_ALL_NOTE = 'DELETE_ALL_NOTE'
export const SAVE_NOTE = 'COMPLETE_NOTE'
export const SAVE_ALL_NOTE = 'SAVE_ALL_NOTE'

export function addNote(title,content){
    return {type: ADD_NOTE, title: title, content: content}
}

export function deleteNote(id){
    return {type: DELETE_NOTE, id: id}
}

export function editNote(id, title, content){
    return {type:EDIT_NOTE, id:id, title: title, content: content}
}

export function saveAllNotes(notes){
    return {type:SAVE_ALL_NOTE, notes:notes}
}
