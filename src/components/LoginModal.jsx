import { Mail, Lock, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoginModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { scale: 0.5, opacity: 0, rotateY: -90 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
      setTimeout(() => {
        alert('This is just a UI demo! The login functionality will work once we build it for you.');
      }, 200);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div 
        ref={modalRef}
        className="relative w-full max-w-md shadow-lg rounded-2xl p-8 mx-4"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(51, 51, 51, 0.9))' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9))',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: isDark ? '#ffffff' : '#000000'
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-orange-500">Login</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div 
              className="flex items-center rounded-lg px-3 mt-1"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`
              }}
            >
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="ml-2 w-full p-2 outline-none bg-transparent"
                style={{ color: isDark ? '#ffffff' : '#000000' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div 
              className="flex items-center rounded-lg px-3 mt-1"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`
              }}
            >
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="ml-2 w-full p-2 outline-none bg-transparent"
                style={{ color: isDark ? '#ffffff' : '#000000' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
          Don't have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}