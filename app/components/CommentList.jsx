import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentList';
    }
    render() {
        return (
          <div>
            <Comment author="Pete Hunt">This is one comment</Comment>
            <Comment author="Jordan Walke">This is *another* comment</Comment>
          </div>
        )
    }
}

export default CommentList;
