import { useState } from "react";

import classes from "./Commets.module.css";

const Comments = (props) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onChange = (event) => setComment(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    setComments((currentArray) => [comment, ...currentArray]);
    setComment("");
  };

  const deleteCommentHandler = (index) => {
    const newComments = comments.filter((_, i) => {
      return i !== index;
    });
    setComments(newComments);
  };

  return (
    <div className={classes["comments"]}>
      <h1>Comments ({comments.length})</h1>
      <form className={classes["submit"]} onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={comment}
          type="text"
          placeholder="Write your comment..."
        />
        <button>Add Comment</button>
      </form>
      <hr />
      <ul className={classes["list"]}>
        {comments.map((comment, index) => (
          <div>
            <li key={comment.id}>{comment}</li>
            <button onClick={() => deleteCommentHandler(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
