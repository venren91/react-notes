import React, { Component } from 'react';
import { Delete } from '@material-ui/icons';

class Note extends Component{

    notes = []
    notesTitleStyle = { fontSize: '15px', border: 'none' }
    notesTitleTextStyle = { paddingLeft: '5px', paddingRight: '5px', maxWidth: '85%'}
    textAreaStyle = { overflow: 'hidden', resize: 'none', height:'5rem', border: 'none', outline: 'none', fontSize: '14px' }
    cardContentCustom = { paddingLeft: '15px', paddingRight: '15px' }
    cardActionCustom = { padding: '0px' }
    materialIconColor = { color: 'black' }

    addNote = (e) => {
        this.notes.push({title:"Enter a title", text: "Enter the content here"})   
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s4 m4">
                    <div className="card white-white darken-1">
                        <span className="card-title" style={this.notesTitleStyle}><input type="text" style={this.notesTitleTextStyle}></input>
                        </span>
                        <div style={this.cardContentCustom}>
                        <textarea rows="1" style={this.textAreaStyle}></textarea>
                        </div>
                        <div style={this.cardActionCustom}>
                            <Delete style={this.materialIconColor}/>
                        </div>
                    </div>
                    </div>
                </div>    
            </div>
            
        );
    }
}

export default Note;
