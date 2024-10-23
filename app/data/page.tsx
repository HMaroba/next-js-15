type IPost = {
  id: number;
  title: string;
  content: string;
};

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
