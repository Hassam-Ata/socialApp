import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row-reverse bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div
          className="lg:flex-1 bg-cover bg-center p-8 md:p-12 flex flex-col gap-6 text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
            url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Lama Social.</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, 
            alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span className="text-sm">Do you have an account?</span>
          <Link to="/login">
            <button className="w-full md:w-1/2 px-4 py-2 bg-gray-700 text-gray-300 font-bold rounded-md hover:bg-gray-600">
              Login
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:flex-1 p-8 md:p-12 bg-gray-900 flex flex-col gap-6 justify-center">
          <h1 className="text-gray-300 text-2xl font-semibold">Register</h1>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username"
              className="border-b-2 border-gray-600 bg-gray-800 py-2 px-3 text-gray-300 focus:outline-none focus:border-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-gray-600 bg-gray-800 py-2 px-3 text-gray-300 focus:outline-none focus:border-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 border-gray-600 bg-gray-800 py-2 px-3 text-gray-300 focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 border-gray-600 bg-gray-800 py-2 px-3 text-gray-300 focus:outline-none focus:border-gray-400"
            />
            <button className="w-full md:w-1/2 px-4 py-2 bg-gray-700 text-gray-300 font-bold rounded-md hover:bg-gray-600">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;