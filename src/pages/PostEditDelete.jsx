import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Heart, MessageCircle, Send, MoreHorizontal } from "lucide-react";
import TurnedInIcon from '@mui/icons-material/TurnedIn';

export default function PostEditDelete() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar showSearch={false} title="Profile ✨" />
        
        {/* Profile Section */}
        <div className="flex justify-center pt-36 px-4">
          <div className="w-full max-w-4xl ml-80 mr-12 space-y-6">
            {/* Profile Card */}
            <div className="bg-neutral-800 p-6 rounded-2xl flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xl">Anne</span>
                  <span className="text-gray-400 text-sm">@anne</span>
                </div>
              </div>
              <button 
                onClick={handleEditProfile}
                className="bg-neutral-700 hover:bg-neutral-600 text-gray-200 px-6 py-2 rounded-full font-medium transition"
              >
                Edit Profile
              </button>
            </div>
            
            {/* Posts Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Posts</h3>
              
              {/* Post Card */}
              <div className="bg-neutral-800 p-6 rounded-2xl space-y-4">
                {/* Post Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">A</span>
                    </div>
                    <div>
                      <span className="font-semibold block text-white">Anne</span>
                      <span className="text-gray-400 text-sm block">3 days ago</span>
                    </div>
                  </div>
                  <MoreHorizontal size={24} className="text-gray-400 cursor-pointer" />
                </div>
                
                {/* Post Content */}
                <div className="flex flex-row gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=400&q=80"
                    alt="post"
                    className="w-156 h-96 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <p className="text-gray-300 text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempo...see more
                    </p>
                  </div>
                </div>
                
                {/* Post Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-8 items-center text-gray-400">
                    <span className="flex items-center space-x-2">
                      <Heart size={22} className="cursor-pointer hover:text-pink-500" />
                      <span className="text-base">29</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <MessageCircle size={22} className="cursor-pointer hover:text-blue-500" />
                      <span className="text-base">29</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Send size={22} className="cursor-pointer hover:text-green-500" />
                      <span className="text-base">29</span>
                    </span>
                    <span>
                      <TurnedInIcon className="cursor-pointer hover:text-yellow-500 w-6 h-4" />
                    </span>
                  </div>
                </div>
                
                {/* Edit/Delete Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 flex-1">Edit</Button>
                  <Button className="bg-neutral-700 hover:bg-neutral-600 flex-1">Delete</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}