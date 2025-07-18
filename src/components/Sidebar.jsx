import { Home, User, Users, MessageCircle, Plus, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-black h-full text-white flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold">Rizz</h2>
      <NavLink to="/home" className="flex gap-2 items-center"><Home size={18}/> Trending</NavLink>
      <NavLink to="/profile" className="flex gap-2 items-center"><User size={18}/> Profile</NavLink>
      <NavLink to="/friends" className="flex gap-2 items-center"><Users size={18}/> Friends</NavLink>
      <NavLink to="/messages" className="flex gap-2 items-center"><MessageCircle size={18}/> Messages</NavLink>
      <NavLink to="/create" className="flex gap-2 items-center"><Plus size={18}/> Create</NavLink>
      <NavLink to="/login" className="text-red-500 mt-auto flex gap-2 items-center"><LogOut size={18}/> Logout</NavLink>
    </div>
  );
}
