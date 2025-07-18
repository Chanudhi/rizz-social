import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-8 space-y-8 overflow-y-auto">
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
