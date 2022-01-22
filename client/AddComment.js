import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Button from '@mui/material/Button';

function AddComment(props) {
  return React.createElement(
    'div',
    { id: 'add-comment' },
    React.createElement(
      FormControl,
      { sx: {
          borderColor: 'primary.main',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 500,
          alignContent: 'center',
          ml: 45,
          mb: 5,
          mt: 5
        } },
      React.createElement(TextField, { id: 'stock-search', label: 'Whats on your mind?', onChange: props.updateCurrentCommentValue, variant: 'standard', gutterBottom: true, size: 'small' }),
      React.createElement(
        Button,
        { onClick: props.saveComment, type: 'submit', gutterBottom: true, variant: 'outlined' },
        'Add Comment'
      )
    )
  );
}

export default AddComment;