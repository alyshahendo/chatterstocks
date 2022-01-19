function AddComment (props) {
  return (
    <div>
      <form>
        <label htmlFor="add-comment">Add a comment:</label>
        <br/>
        <input onChange={props.updateCurrentCommentValue} type="text" name="add-comment"/>
        <input onClick={props.saveComment} type="submit"/>
      </form>
    </div>
  )
}