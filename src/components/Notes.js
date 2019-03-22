import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component{

    constructor(props){
        super(props);
        this.state = {notes: props.notes};
    }

    handleNoteTitleChange= (noteId, e) => {
        var notes = this.state.notes;
        notes.find(n => (n.id === noteId)).title = e.target.value;
        this.setState({notes: notes });
    }

    handleNoteContentChange= (noteId, e) => {
        var notes = this.state.notes;
        notes.find(n => (n.id === noteId)).content = e.target.value;
        this.setState({notes: notes });
    }

    handleNoteDelete = (noteId, e) => {
        var notes = this.state.notes;
        var ind = notes.indexOf(notes.find(n => (n.id === noteId)))
        notes.splice(ind,1)
        this.setState({notes: notes });
    }

    renderNotes = (notes) => {
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

    addNotes = () => {
        this.setState(prevState => ({
            notes: [ ...prevState.notes,{ id: this.state.notes.length+1, title: "", content: ""}]
        }))
    }

    render(){
        const notesComponent = this.renderNotes(this.state.notes)
        return(
            <div className="container">
                <div className="row">
                    <form className="col s12 m12 l12 ">
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <i className="material-icons prefix cyan-text text-darken-4">search</i>
                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                <i className="material-icons prefix cyan-text text-darken-4" onClick={this.addNotes}>add</i>
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

export default Notes;
