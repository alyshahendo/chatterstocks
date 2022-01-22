import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Button from '@mui/material/Button';

function AddComment (props) {
  return (
    <div id="add-comment">
        <FormControl sx={{
          borderColor: 'primary.main',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 200,
          alignContent: 'center',
          mb: 5
        }} >
          <TextField id='stock-search' label='Whats on your mind?' onChange={props.updateCurrentCommentValue} variant="standard" gutterBottom={true} size='small'/>
          <Button onClick={props.saveComment} type='submit' gutterBottom={true} variant='outlined'>Add Comment</Button>
        </FormControl>
    </div>
  )
}

export default AddComment;