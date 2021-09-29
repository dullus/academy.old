interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserTable = (props: any) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.posts.length > 0 ? (
        props.posts.map((post: Post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(post);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletePost(post.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No posts</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
