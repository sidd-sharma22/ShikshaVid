import { Star, MapPin, Award, BadgeCheck } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onViewProfile: (tutorId: string) => void;
}

export default function TutorCard({ tutor, onViewProfile }: TutorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {tutor.name}
                </h3>
                {tutor.verified && (
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {tutor.subjects.join(', ')}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-900">
                {tutor.rating}
              </span>
              <span className="text-xs text-gray-600">
                ({tutor.reviewCount})
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-blue-600" />
              <span>{tutor.experience} years exp.</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{tutor.distance} km away</span>
            </div>
            <div className="font-semibold text-gray-900">
              ₹{tutor.feeRange.min} - ₹{tutor.feeRange.max}/month
            </div>
          </div>

          <div className="mt-3 bg-blue-50 rounded px-3 py-2 text-sm text-blue-900">
            <span className="font-medium">Why recommended: </span>
            {tutor.whyRecommended}
          </div>

          <div className="mt-4">
            <button
              onClick={() => onViewProfile(tutor.id)}
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
