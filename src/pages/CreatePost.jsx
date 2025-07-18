import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useState } from "react";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Create Post</h2>
        <div className="bg-neutral-800 p-6 rounded-2xl max-w-lg space-y-4">
          <textarea
            rows="4"
            placeholder="Write your caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-neutral-700 p-4 rounded-lg text-gray-200"
          />
          <input
            type="file"
            id="postImage"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "No file chosen")}
          />
          <label htmlFor="postImage" className="block bg-neutral-700 p-4 rounded-lg text-gray-400 cursor-pointer">
            {fileName}
          </label>
          <Button className="w-full">Post</Button>
        </div>
      </div>
    </div>
  );
}
