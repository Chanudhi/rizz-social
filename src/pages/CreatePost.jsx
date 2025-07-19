import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { ImageIcon, MoreHorizontal } from "lucide-react";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar showSearch={false} title="Hit the Timeline ✨" />
        
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center pt-24 px-8 ml-60">
          <div className="w-full max-w-lg">
            {/* Post Creation Card */}
            <div className="bg-neutral-800 rounded-2xl p-6 space-y-4 w-full">
              {/* User Info with More Options */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" fill="#fff" />
                      <ellipse cx="12" cy="17" rx="7" ry="4" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Anne</span>
                    <span className="text-gray-400 text-sm block">@anne</span>
                  </div>
                </div>
                <MoreHorizontal size={24} className="text-gray-400 cursor-pointer" />
              </div>
              
              {/* Text Area */}
              <div className="space-y-4">
                <textarea
                  rows="8"
                  placeholder="What's on your mind ?"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full bg-neutral-700 p-4 rounded-lg text-gray-200 placeholder-gray-400 border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* Add Images Button */}
                <div className="flex justify-center">
                  <label htmlFor="postImage" className="flex items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 px-6 py-3 rounded-lg cursor-pointer transition">
                    <ImageIcon size={20} className="text-gray-400" />
                    <span className="text-gray-400 font-medium">Add Images</span>
                  </label>
                  <input
                    type="file"
                    id="postImage"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </div>
                
                {/* Show selected file name */}
                {fileName && (
                  <div className="text-sm text-gray-400 text-center">
                    Selected: {fileName}
                  </div>
                )}
                
                {/* Post Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}