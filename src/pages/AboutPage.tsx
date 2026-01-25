import {
  Target,
  Users,
  Heart,
  Award,
  MapPin,
  TrendingUp,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About ShikshaVid
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Helping students avoid long commutes by discovering quality teachers
            nearby.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ShikshaVid was born from a simple observation: thousands of students
            in Tier-2 and Tier-3 cities travel hours every day to reach
            coaching centers in bigger cities, spending valuable time and money
            on commute instead of learning.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe quality education should be accessible locally. There are
            skilled, experienced tutors in every neighborhood, but students and
            parents struggle to discover them. ShikshaVid bridges this gap by
            helping families find the best-fit local tutors based on multiple
            factors, not just popularity.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">The Problem</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Wasted Time on Travel
                </h3>
                <p className="text-gray-700 text-sm">
                  Students spend 2-3 hours daily traveling to coaching hubs,
                  losing precious study time and energy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  High Costs
                </h3>
                <p className="text-gray-700 text-sm">
                  Expensive coaching fees plus travel costs and sometimes even
                  accommodation expenses burden families.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Hidden Local Talent
                </h3>
                <p className="text-gray-700 text-sm">
                  Many excellent local tutors remain undiscovered because
                  there's no platform to showcase their skills and experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            ShikshaVid uses a smart recommendation system that evaluates tutors
            based on multiple parameters:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Teaching Skills
              </h3>
              <p className="text-gray-700 text-sm">
                Verified qualifications and subject expertise
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-700 text-sm">
                Years of teaching and proven track record
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Distance</h3>
              <p className="text-gray-700 text-sm">
                How close the tutor is to your location
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Affordable Fees
              </h3>
              <p className="text-gray-700 text-sm">
                Transparent pricing that fits your budget
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Real Reviews
              </h3>
              <p className="text-gray-700 text-sm">
                Honest feedback from other students and parents
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-700 text-sm">
                Background checks and identity verification
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Who We Serve</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Students</h3>
              <p className="text-gray-700 text-sm">
                Find quality tutors nearby and save time on commute
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Parents</h3>
              <p className="text-gray-700 text-sm">
                Make informed decisions with transparent information and real
                reviews
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Local Tutors
              </h3>
              <p className="text-gray-700 text-sm">
                Showcase your skills and connect with students in your area
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We envision a future where every student in India has access to
            quality education right in their neighborhood. Where distance is no
            longer a barrier to learning, and local talent is celebrated and
            utilized effectively.
          </p>
        </section>
      </div>
    </div>
  );
}
