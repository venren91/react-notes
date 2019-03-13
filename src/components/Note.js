import React, { Component } from 'react';

class Note extends Component{

    notes = []
    notesTitleStyle = { fontSize: '20px' }
    notesTextStyle = { fontSize: '15px' }

    addNote = (e) => {
        this.notes.push({title:"Enter a title", text: "Enter the content here"})   
    }

    render(){
        return(
            <div className="row">
                <div className="col s4 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title" style={this.notesTitleStyle}><input type="text"></input></span>
                    <p style={this.notesTextStyle}>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    <div className="card-action">
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>    
            
        );
    }
}

export default Note;