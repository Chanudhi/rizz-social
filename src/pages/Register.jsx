import InputField from "../components/InputField";
import Button from "../components/Button";
import registerImg from "../assets/images/login.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      {/* Left: Register Form */}
      <div className="flex flex-col justify-center items-center w-1/2 px-16">
        <h1 className="text-3xl mb-8 font-semibold text-center">
          Sign up to <span className="font-irishgrover text-4xl">Rizz</span>
        </h1>
        <div className="w-full max-w-[340px] space-y-4">
          <InputField placeholder="Username" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <Button className="w-full mt-2" style={{ borderRadius: 30 }}>
            Register
          </Button>
          <p className="text-xs mt-8 text-gray-400 text-center font-light">
            Already have an account?{" "}
            <Link
              to="/"
              className=" text-blue-400 hover:text-blue-300 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex items-center justify-center w-1/2 bg-black">
        <img
          src={registerImg}
          alt="Register"
          className="w-[500px] h-[700px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
