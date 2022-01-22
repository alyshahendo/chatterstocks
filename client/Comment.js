// users can comment on stocks
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';

function Comment(props) {
  return React.createElement(
    'div',
    { className: 'comment' },
    React.createElement(
      Box,
      { sx: {
          borderColor: 'primary.main',
          boxShadow: 1,
          borderRadius: 2 } },
      React.createElement(
        Typography,
        null,
        React.createElement(
          'div',
          { className: 'username' },
          props.comment.username
        ),
        React.createElement(
          'div',
          { className: 'text' },
          props.comment.text
        ),
        React.createElement(
          'div',
          { className: 'created-at' },
          props.comment.created_at.substring(0, 10) + ' ' + props.comment.created_at.substring(11, 16)
        ),
        React.createElement('br', null)
      )
    )
  );
}

export default Comment;