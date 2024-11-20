import { Activity, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold">Vitalia</span>
            </div>
            <p className="text-gray-400">
              Empowering your journey to better health through technology and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-teal-400">Features</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-teal-400">Dashboard</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400">About Us</Link></li>
              <li><Link to="/account" className="text-gray-400 hover:text-teal-400">Account</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-teal-400">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-teal-400">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vitalia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}