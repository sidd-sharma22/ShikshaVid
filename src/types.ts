export interface Tutor {
  id: string;
  name: string;
  subjects: string[];
  experience: number;
  distance: number;
  feeRange: {
    min: number;
    max: number;
  };
  rating: number;
  reviewCount: number;
  photo: string;
  verified: boolean;
  whyRecommended: string;
  description: string;
  qualifications: string[];
  teachingStyle: string;
  availability: string[];
  phoneNumber: string;
  badges: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  studentName: string;
  rating: number;
  comment: string;
  date: string;
}
