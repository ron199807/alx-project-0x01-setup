export default function PostCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
