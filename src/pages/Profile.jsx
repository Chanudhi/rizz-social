import Sidebar from "../components/Sidebar";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
        <div className="bg-neutral-800 p-6 rounded-2xl max-w-md space-y-4">
          <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto" />
          <InputField placeholder="Name" />
          <InputField placeholder="Username" />
          <InputField placeholder="Bio" />
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
