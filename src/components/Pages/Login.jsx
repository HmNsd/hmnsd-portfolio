import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-stone-300 font-mono">Login</h1>
        
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-50">
              Email address
            </label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="ml-2 w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-50">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="ml-2 w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <span className="ml-2 text-stone-50">Remember me</span>
            </label>
            <a href="#" className="text-orange-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white focus:ring-2 focus:ring-stone-50"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="GitHub" className="w-5 h-5 mr-2" />
            Continue with Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-300 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
