import UserCard from "@/components/common/UserCard";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { UserProps, PostProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
  posts: PostProps[];
}

const Users: React.FC<UsersPageProps> = ({ users, posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        {/* Users Section */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold">User Profiles</h1>
            <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
              Add User
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>

        {/* Posts Section */}
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold">User Posts</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch both users and posts in parallel
  const [usersRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts")
  ]);

  const [users, posts] = await Promise.all([
    usersRes.json(),
    postsRes.json()
  ]);

  return {
    props: {
      users,
      posts
    },
  };
}

export default Users;