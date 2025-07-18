import { Bell, User } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    // Navbar starts after the sidebar (left-60)
    <nav className="w-[calc(100%-15rem)] px-8 py-6 flex items-center justify-end bg-neutral-900 border-b border-neutral-800 fixed top-0 left-60 z-50">
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