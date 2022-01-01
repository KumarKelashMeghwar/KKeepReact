import React from 'react'

const Note = ({content, text, id, deleteBtn}) => {

    const deleteHandler = () => {
       deleteBtn(id);
    }

    return (
        <div className='note'>
            <h4 className='note-heading'>{text}</h4>
            <p className='content'>{content}</p>
            <button className='delete-btn' onClick={deleteHandler}>-</button>
        </div>
    )
}

export default Note
