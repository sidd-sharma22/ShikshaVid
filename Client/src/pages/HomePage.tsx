import {
  MapPin,
  Search,
  CheckCircle,
  Shield,
  Star,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string, location?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      onNavigate('listing', location);
    } else {
      onNavigate('listing');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Find the Best Local Tutors Near You
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600">
            Skill, experience, distance, fees, and real reviews — all in one
            place.
          </p>

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your city or area (e.g., Raipur, Jhansi)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Find Tutors
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Students Struggle
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Many students travel long distances to coaching centers in bigger
              cities, wasting time and money. Quality education should be
              available nearby.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Long Commute
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                2-3 hours daily travel to distant coaching centers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">High Costs</h3>
              <p className="mt-2 text-sm text-gray-600">
                Expensive fees plus travel and accommodation costs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Unknown Quality
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Hard to find verified, skilled tutors nearby
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              How ShikshaVid Works
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Finding the right tutor is simple and transparent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                1
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Enter Your Location
              </h3>
              <p className="mt-2 text-gray-600">
                Tell us your city or area. We'll find tutors near you.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                2
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Get Smart Recommendations
              </h3>
              <p className="mt-2 text-gray-600">
                See tutors ranked by skill, experience, distance, fees, and
                ratings.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                3
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Connect & Learn
              </h3>
              <p className="mt-2 text-gray-600">
                Book a demo class and start learning from the best tutor for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Trust ShikshaVid?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Verified Tutors
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                All tutors are verified with background checks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Real Reviews
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Genuine feedback from students and parents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Smart Matching
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Best-fit recommendations, not just popularity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Find Your Perfect Tutor?
          </h2>
          <p className="mt-4 text-gray-600">
            Join thousands of students learning from quality tutors near them.
          </p>
          <button
            onClick={handleSearch}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
