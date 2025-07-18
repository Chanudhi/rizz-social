import { Heart, MessageCircle, Share2, Save } from "lucide-react";

export default function PostCard({
  username = "Anne",
  time = "3d ago",
  caption = "Lorem ipsum dolor sit amet...",
  imageUrl = "https://picsum.photos/400/200",
}) {
  return (
    <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full" />
          <span className="font-semibold">{username}</span>
        </div>
        <span className="text-gray-400">{time}</span>
      </div>
      <p className="text-gray-300">{caption}</p>
      <img src={imageUrl} alt="post" className="w-full h-48 object-cover rounded-xl" />
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex space-x-4">
          <Heart size={20} className="cursor-pointer hover:text-pink-500" />
          <MessageCircle size={20} className="cursor-pointer hover:text-blue-500" />
          <Share2 size={20} className="cursor-pointer hover:text-green-500" />
          <Save size={20} className="cursor-pointer hover:text-yellow-500" />
        </div>
        <div className="space-x-4">
          <span>❤️ 29</span>
          <span>💬 10</span>
        </div>
      </div>
    </div>
  );
}
