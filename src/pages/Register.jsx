import InputField from "../components/InputField";
import Button from "../components/Button";
import registerImg from "../assets/images/login.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="w-1/2 flex flex-col justify-center items-center px-16">
        <h1 className="text-3xl mb-4 font-semibold">Sign up to Rizz</h1>
        <InputField placeholder="Username" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <Button className="w-full mt-2">Register</Button>
        <p className="text-sm mt-4 text-gray-400">
          Already have an account? <Link to="/" className="underline text-white">Login</Link>
        </p>
      </div>
      <div className="w-1/2">
        <img src={registerImg} alt="Register" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
