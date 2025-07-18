import Sidebar from "../components/Sidebar";
import { Users } from "lucide-react";

export default function Friends() {
  const friends = ["Anne", "Bob", "Cara", "Dylan"];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Friends</h2>
        <div className="space-y-4">
          {friends.map((name, idx) => (
            <div key={idx} className="bg-neutral-800 p-4 rounded-xl flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Users size={24} className="text-blue-500" />
                <span className="font-medium">{name}</span>
              </div>
              <button className="text-red-500 font-medium">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
