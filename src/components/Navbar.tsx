import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-teal-500" />
              <span className="text-xl font-bold text-gray-800">Vitalia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-teal-500'
                    : 'text-gray-600 hover:text-teal-500'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/account"
              className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-teal-50 text-teal-500'
                    : 'text-gray-600 hover:bg-teal-50 hover:text-teal-500'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/account"
              className="block px-3 py-2 rounded-md text-base font-medium bg-teal-500 text-white hover:bg-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}