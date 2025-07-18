import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import PostCard from "../components/PostCard";

export default function PostEditDelete() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Your Posts</h2>
        <div className="space-y-4">
          <PostCard />
          <div className="flex space-x-4">
            <Button>Edit</Button>
            <Button className="bg-red-600 hover:bg-red-700">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
