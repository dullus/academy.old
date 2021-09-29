import { useState, useEffect } from "react";

const EditUserForm = (props: any) => {
  const [post, setPost] = useState(props.currentPost);

  useEffect(() => {
    setPost(props.currentPost);
  }, [props]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updatePost(post.id, post);
      }}
    >
      <label>ID</label>
      <input
        type="number"
        name="name"
        value={post.id}
        onChange={handleInputChange}
      />
      <label>Title</label>
      <input
        type="text"
        name="username"
        value={post.title}
        onChange={handleInputChange}
      />
      <button>Update post</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
