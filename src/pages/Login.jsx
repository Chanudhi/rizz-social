import InputField from "../components/InputField";
import Button from "../components/Button";
import loginImg from "../assets/images/login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="w-1/2 flex flex-col justify-center items-center px-16">
        <h1 className="text-3xl mb-4 font-semibold">Login to Rizz</h1>
        <InputField placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button className="w-full mt-2">Login</Button>
        <p className="text-sm mt-4 text-gray-400">
          Don't have an account? <Link to="/register" className="underline text-white">Register</Link>
        </p>
      </div>
      <div className="w-1/2">
        <img src={loginImg} alt="Login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
