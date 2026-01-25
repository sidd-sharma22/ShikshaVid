import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                ShikshaVid
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting students with the best local tutors based on skill,
              experience, distance, and affordability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('listing')}
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Find Tutors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                contact@shikshavid.com
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Serving Tier-2 and Tier-3 cities
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 ShikshaVid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
