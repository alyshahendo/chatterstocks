// users can comment on stocks
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';

function Comment (props) {
  return (
    <div className="comment">
      <Box sx={{
        borderColor: 'primary.main',
        boxShadow: 1,
        borderRadius: 2}}>
        <Typography>
          <table>
            <tr>
              <td>
              <img width='50px' height='50px' src='../avatar-1577909_960_720.png'></img>
              </td>
              <td>
              <div className="username">{props.comment.username}</div>
              <div className="text">{props.comment.text}</div>
              <div className="created-at">{props.comment.created_at.substring(0, 10) + ' ' + props.comment.created_at.substring(11, 16)}</div>
              <br />
              </td>
            </tr>
          </table>
        </Typography>
      </Box>
    </div>
  )
}

export default Comment;