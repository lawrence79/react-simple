import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
    }
    render() {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            {this.props.children}
          </div>
        )
    }
}

export default Comment;
