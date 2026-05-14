import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import TutorCard from '../components/TutorCard';
import FilterSidebar from '../components/FilterSidebar';
import { tutors } from '../data/tutors';

interface TutorListingPageProps {
  onNavigate: (page: string, tutorId?: string) => void;
  location?: string;
}

interface Filters {
  maxDistance: number;
  minExperience: number;
  maxFee: number;
  minRating: number;
}

export default function TutorListingPage({
  onNavigate,
  location,
}: TutorListingPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    maxDistance: 50,
    minExperience: 0,
    maxFee: 10000,
    minRating: 0,
  });

  const filteredTutors = useMemo(() => {
    return tutors.filter(
      (tutor) =>
        tutor.distance <= filters.maxDistance &&
        tutor.experience >= filters.minExperience &&
        tutor.feeRange.max <= filters.maxFee &&
        tutor.rating >= filters.minRating
    );
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {location ? `Tutors near ${location}` : 'Find Your Perfect Tutor'}
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredTutors.length} tutors found, ranked by best fit
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden mb-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Filter className="h-4 w-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="grid md:grid-cols-4 gap-6">
          <aside
            className={`${showFilters ? 'block' : 'hidden'} md:block md:col-span-1`}
          >
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </aside>

          <main className="md:col-span-3">
            {filteredTutors.length > 0 ? (
              <div className="space-y-4">
                {filteredTutors.map((tutor) => (
                  <TutorCard
                    key={tutor.id}
                    tutor={tutor}
                    onViewProfile={(id) => onNavigate('profile', id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <p className="text-gray-600">
                  No tutors found matching your filters. Try adjusting your
                  preferences.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      maxDistance: 50,
                      minExperience: 0,
                      maxFee: 10000,
                      minRating: 0,
                    })
                  }
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
