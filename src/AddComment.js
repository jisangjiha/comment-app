import { useState } from "react";

function AddComment() {
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

  //console.log(comments);

  return (
    <div>
      <h1>Comments ({comments.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={comment}
          type="text"
          placeholder="Write your comment..."
        />
        <button>Add Comment</button>
      </form>
      <hr />
      <ul>
        {comments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddComment;
