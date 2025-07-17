import { useState } from 'react';
import UserCard from "@/components/common/UserCard";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserProps, PostProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
  posts: PostProps[];
}

const Users: React.FC<UsersPageProps> = ({ users: initialUsers, posts }) => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: import("@/interfaces").UserData) => {
    // Generate a new ID (in a real app, this would come from your API)
    const userWithId = {
      ...newUser,
      id: Math.max(...users.map(u => u.id), 0) + 1
    };
    setUsers([...users, userWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        {/* Users Section */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold">User Profiles</h1>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors"
            >
              Add User
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>

      </main>

      <UserModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddUser}
      />
    
    </div>
  );
};

export async function getStaticProps() {
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