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
          'table',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              React.createElement('img', { width: '50px', height: '50px', src: '../avatar-1577909_960_720.png' })
            ),
            React.createElement(
              'td',
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
        )
      )
    )
  );
}

export default Comment;