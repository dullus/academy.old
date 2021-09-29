import { useState, useEffect, Fragment } from "react";
import UserTable from "./Table";
import EditUserForm from "./EditPostForm";
import AddPostForm from "./AddPostForm";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const initialPost = { userId: 1, id: 1, title: " ", body: " " };
  let IArray: Post[] = [];

  const [editing, setEditing] = useState(false);

  const [currentPost, setCurrentPost] = useState(initialPost);

  const url = `http://jsonplaceholder.typicode.com/posts/`;

  const [posts, setPosts] = useState(IArray);

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const editRow = (post: Post) => {
    setEditing(true);

    setCurrentPost({
      id: post.id,
      userId: post.userId,
      body: post.body,
      title: post.title,
    });
  };

  const updatePost = (id: number, updatedPost: Post) => {
    setEditing(false);

    setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addPost = (post: Post) => {
    post.id = posts.length + 1;
    setPosts([...posts, post]);
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large"></div>
        {editing ? (
          <Fragment>
            <h2>Edit post</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentPost={currentPost}
              updatePost={updatePost}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add post</h2>
            <AddPostForm addPost={addPost} />
          </Fragment>
        )}

        <div className="flex-large">
          <h2>View posts </h2>
          <UserTable posts={posts} editRow={editRow} deletePost={deletePost} />
        </div>
      </div>
    </div>
  );
};
export default App;
