import React, { Component } from 'react';
import Note from './Note';
import {connect} from "react-redux";
import {addNote, editNote, deleteNote} from '../actions/NoteActions';
import { NotesService } from '../services/NotesService';

class Notes extends Component{

    // Things to do before unloading/closing the tab
    doSomethingBeforeUnload = () => {
        console.log("going to call post method")
        NotesService.saveAllNotes('venren_notes', this.props.notes)
        .then((response)=>{
            console.log(response.data);
        })
    }

    handleNoteTitleChange= (noteId, e) => {
        this.props.editNote(noteId,e.target.value,undefined)
    }

    handleNoteContentChange= (noteId, e) => {
        this.props.editNote(noteId,undefined,e.target.value)
    }

    handleNoteDelete = (noteId, e) => {
        this.props.deleteNote(noteId);
    }

    renderNotes = (notes) => {
        console.log("calling render  note")
        if (notes && notes.length > 0) {      
            return notes.map((note, index) => (
                <Note 
                changeContentEvent = {this.handleNoteContentChange.bind(this,note.id)}
                changeTitleEvent = {this.handleNoteTitleChange.bind(this,note.id)}
                deleteNoteEvent = {this.handleNoteDelete.bind(this,note.id)}
                key={note.id} title={note.title} content={note.content}/>
            ));
        }
        else return [];
    }

    render(){
        console.log("calling rende method")
        const notesComponent = this.renderNotes(this.props.notes)
        var saveButtonStyle = { marginLeft: '0px', marginRight: '0px' }
        return(
            <div className="container">
                <div className="row">
                    <form className="col s12 m12 l12 ">
                        <div className="row">
                            <div className="input-field col s11 m11 l11">
                                <i className="material-icons prefix cyan-text text-darken-4">search</i>
                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                <i className="material-icons prefix cyan-text text-darken-2" onClick={() => this.props.addNote("","")}>add</i>
                            </div>
                            <div className="input-field col s1 m1 l1" style={saveButtonStyle}>
                                <i className="material-icons prefix cyan-text text-darken-4" onClick={() => this.doSomethingBeforeUnload()}>save</i>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row" >
                    {notesComponent}
                </div>    
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    console.log("calling map state to props")
    console.log(state);
    return {
        notes: state.NoteReducer.notes
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        addNote: (title,content) => {
            console.log("calling add note")
            dispatch(addNote(title,content));
        },
        editNote: (id,title,content) => {
            console.log("calling edit note")
            dispatch(editNote(id,title,content));
        },
        deleteNote: (id) => {
            console.log("calling delete note")
            dispatch(deleteNote(id));
        }
      };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
