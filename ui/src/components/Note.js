import React from 'react'

const Note = (props) => {
    
    var notesTitleStyle = { fontSize: '15px', border: 'none' }
    var notesTitleTextStyle = { paddingLeft: '5px', paddingRight: '5px', maxWidth: '85%'}
    var textAreaStyle = { overflow: 'hidden', resize: 'none', height:'5rem', border: 'none', outline: 'none', fontSize: '14px' }
    var cardContentCustom = { paddingLeft: '15px', paddingRight: '15px' }
    var cardActionCustom = { padding: '0px' }

    return ( 
            <div className="col s12 m4 l3">
                <div className="card white-white darken-1">
                    <span className="card-title" style={notesTitleStyle}>
                        <input type="text" placeholder="enter a title here" 
                        onChange={props.changeTitleEvent}
                        style={notesTitleTextStyle} value={props.title}></input>
                    </span>
                    <div style={cardContentCustom}>
                    <textarea rows="1" 
                    placeholder="enter your notes here" 
                    onChange={props.changeContentEvent}
                    style={textAreaStyle} value={props.content}></textarea>
                    </div>
                    <div style={cardActionCustom}>
                        <i className='material-icons cyan-text text-darken-4' onClick={props.deleteNoteEvent}>
                            delete
                        </i>
                    </div>
                </div>
            </div>                    
        
    );
};

export default Note;