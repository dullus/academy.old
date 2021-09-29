import { useState } from "react";

const AddPostForm = (props: any) => {
  const initialFormState = { id: 1, title: "" };
  const [post, setPost] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { title, value } = event.target;

    setPost({ ...post, [title]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addPost(post);
        setPost(initialFormState);
      }}
    >
      <label>Title</label>
      <input
        type="text"
        name="name"
        value={post.title}
        onChange={handleInputChange}
      />
      <label>ID</label>
      <input
        type="number"
        name="username"
        value={post.id}
        onChange={handleInputChange}
      />
      <button>Add new Post</button>
    </form>
  );
};

export default AddPostForm;
