import {
  Star,
  MapPin,
  Award,
  BadgeCheck,
  Phone,
  MessageCircle,
  Calendar,
  GraduationCap,
  Clock,
  Video,
} from 'lucide-react';
import { tutors } from '../data/tutors';
import { Tutor } from '../types';

interface TutorProfilePageProps {
  tutorId: string;
}

export default function TutorProfilePage({ tutorId }: TutorProfilePageProps) {
  const tutor = tutors.find((t) => t.id === tutorId);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Tutor not found
          </h2>
          <p className="mt-2 text-gray-600">
            The tutor you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={tutor.photo}
              alt={tutor.name}
              className="w-32 h-32 rounded-lg object-cover"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {tutor.name}
                    </h1>
                    {tutor.verified && (
                      <BadgeCheck className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <p className="mt-2 text-lg text-gray-600">
                    {tutor.subjects.join(', ')}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-lg font-semibold text-gray-900">
                    {tutor.rating}
                  </span>
                  <span className="text-sm text-gray-600">
                    ({tutor.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>{tutor.experience} years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{tutor.distance} km away</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-gray-900">
                  ₹{tutor.feeRange.min} - ₹{tutor.feeRange.max}/month
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {tutor.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {tutor.description}
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Qualifications
                </h2>
              </div>
              <ul className="space-y-2">
                {tutor.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{qual}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Teaching Style
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {tutor.teachingStyle}
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Video className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Demo Video
                </h2>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  <p>Demo video coming soon</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Reviews ({tutor.reviewCount})
              </h2>
              <div className="space-y-4">
                {tutor.reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-0 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">
                          {review.studentName}
                        </p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-20">
              <h3 className="font-semibold text-gray-900 mb-4">
                Contact Tutor
              </h3>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Phone className="h-5 w-5" />
                  Call Now
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  <Calendar className="h-5 w-5" />
                  Book Demo Class
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">Availability</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {tutor.availability.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <span className="font-medium">Why recommended:</span>{' '}
                  {tutor.whyRecommended}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
