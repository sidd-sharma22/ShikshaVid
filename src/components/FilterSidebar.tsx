import { SlidersHorizontal } from 'lucide-react';

interface Filters {
  maxDistance: number;
  minExperience: number;
  maxFee: number;
  minRating: number;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
}: FilterSidebarProps) {
  const handleChange = (key: keyof Filters, value: number) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b">
        <SlidersHorizontal className="h-5 w-5 text-gray-700" />
        <h2 className="font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Distance
          </label>
          <select
            value={filters.maxDistance}
            onChange={(e) =>
              handleChange('maxDistance', Number(e.target.value))
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={50}>Any distance</option>
            <option value={1}>Within 1 km</option>
            <option value={2}>Within 2 km</option>
            <option value={3}>Within 3 km</option>
            <option value={5}>Within 5 km</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience
          </label>
          <select
            value={filters.minExperience}
            onChange={(e) =>
              handleChange('minExperience', Number(e.target.value))
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Any experience</option>
            <option value={3}>3+ years</option>
            <option value={5}>5+ years</option>
            <option value={10}>10+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Fee (per month)
          </label>
          <select
            value={filters.maxFee}
            onChange={(e) => handleChange('maxFee', Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={10000}>Any budget</option>
            <option value={800}>Up to ₹800</option>
            <option value={1000}>Up to ₹1000</option>
            <option value={1200}>Up to ₹1200</option>
            <option value={1500}>Up to ₹1500</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => handleChange('minRating', Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Any rating</option>
            <option value={4}>4+ stars</option>
            <option value={4.5}>4.5+ stars</option>
            <option value={4.8}>4.8+ stars</option>
          </select>
        </div>

        <button
          onClick={() =>
            onFilterChange({
              maxDistance: 50,
              minExperience: 0,
              maxFee: 10000,
              minRating: 0,
            })
          }
          className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
