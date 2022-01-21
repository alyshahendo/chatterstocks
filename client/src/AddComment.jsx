import React from 'react';

function AddComment (props) {
  return (
    <div id="add-comment">
      <form>
        <label htmlFor="add-comment">Add a comment:</label>
        <br/>
        <input onChange={props.updateCurrentCommentValue} type="text" name="add-comment"/>
        <input onClick={props.saveComment} type="submit"/>
      </form>
    </div>
  )
}

export default AddComment;