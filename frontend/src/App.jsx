import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Sign Up' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo / Title */}
          <Link
            to="/"
            className="text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            UserAuth
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-indigo-700 border-b-2 border-indigo-700 pb-1'
                    : 'text-gray-600 hover:text-indigo-600 hover:pb-1'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} UserAuth Project — Built with ❤️ using React & NestJS by Vo Van Nam - 22120222
      </footer>
    </div>
  );
}
