import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="py-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side with branding and social icons */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">
              <span style={{ color: '#89043d' }}>D</span>eeksha
            </h3>
            <p className="mb-4 text-gray-600 max-w-sm">
              PR & Events Executive. Passionate about people, stories and connections. Where every pitch matters.
            </p>
            <SocialIcons />
          </div>

          {/* Right side with contact information */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  style={{ color: '#89043d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">deekshadee618@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  style={{ color: '#89043d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-600">+91 7204742616</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p className="text-gray-500 text-xs mt-2">
            &copy; 2025 Deeksha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
