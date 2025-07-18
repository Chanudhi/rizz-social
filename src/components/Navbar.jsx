import { Bell, User } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-neutral-900 border-b border-neutral-800">
      <div className="flex items-center">
        <span className="text-3xl font-bold font-serif text-white">Rizz</span>
      </div>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Bell className="text-gray-200 cursor-pointer" size={26} />
        <div className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center cursor-pointer">
          <User className="text-gray-200" size={22} />
        </div>
      </div>
    </nav>
  );
}