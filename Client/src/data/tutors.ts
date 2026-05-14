import { Tutor } from '../types';

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    subjects: ['Mathematics', 'Physics'],
    experience: 12,
    distance: 0.6,
    feeRange: { min: 800, max: 1200 },
    rating: 4.8,
    reviewCount: 47,
    photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Highly skilled, very close, affordable fees',
    description: 'IIT Delhi graduate with 12 years of teaching experience. Specialized in helping students crack competitive exams like JEE and board exams.',
    qualifications: ['B.Tech - IIT Delhi', 'M.Tech - IIT Delhi'],
    teachingStyle: 'Concept-based learning with regular practice tests and doubt clearing sessions.',
    availability: ['Monday-Friday: 4 PM - 8 PM', 'Saturday: 10 AM - 6 PM'],
    phoneNumber: '+91 98765 43210',
    badges: ['Highly Skilled', 'Experienced', 'Verified'],
    reviews: [
      {
        id: 'r1',
        studentName: 'Priya Sharma',
        rating: 5,
        comment: 'Best teacher for Mathematics! My son improved from 60% to 92% in just 6 months.',
        date: '2024-01-15'
      },
      {
        id: 'r2',
        studentName: 'Amit Patel',
        rating: 5,
        comment: 'Very patient and explains concepts clearly. Highly recommended!',
        date: '2024-01-10'
      },
      {
        id: 'r3',
        studentName: 'Sneha Gupta',
        rating: 4,
        comment: 'Good teacher but sometimes classes get rescheduled.',
        date: '2023-12-20'
      }
    ]
  },
  {
    id: '2',
    name: 'Sunita Verma',
    subjects: ['English', 'Hindi'],
    experience: 8,
    distance: 1.2,
    feeRange: { min: 600, max: 900 },
    rating: 4.6,
    reviewCount: 32,
    photo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Excellent communication skills, affordable',
    description: 'MA in English Literature with 8 years of experience. Focused on improving spoken English and writing skills.',
    qualifications: ['MA English - Delhi University', 'B.Ed'],
    teachingStyle: 'Interactive sessions with focus on practical communication and grammar fundamentals.',
    availability: ['Monday-Saturday: 5 PM - 8 PM'],
    phoneNumber: '+91 98765 43211',
    badges: ['Verified', 'Highly Skilled'],
    reviews: [
      {
        id: 'r4',
        studentName: 'Rahul Singh',
        rating: 5,
        comment: 'My daughter\'s English speaking improved tremendously!',
        date: '2024-01-12'
      },
      {
        id: 'r5',
        studentName: 'Meera Joshi',
        rating: 4,
        comment: 'Very good teacher, friendly and approachable.',
        date: '2024-01-05'
      }
    ]
  },
  {
    id: '3',
    name: 'Anil Mehta',
    subjects: ['Chemistry', 'Biology'],
    experience: 15,
    distance: 2.1,
    feeRange: { min: 1000, max: 1500 },
    rating: 4.9,
    reviewCount: 68,
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Top rated, highly experienced, excellent track record',
    description: 'Former school principal with 15 years of teaching experience. Expert in NEET and board exam preparation.',
    qualifications: ['M.Sc Chemistry', 'B.Ed'],
    teachingStyle: 'Structured curriculum with regular assessments and personalized attention.',
    availability: ['Monday-Saturday: 6 AM - 9 AM', 'Evening: 6 PM - 8 PM'],
    phoneNumber: '+91 98765 43212',
    badges: ['Highly Skilled', 'Experienced', 'Verified', 'Top Rated'],
    reviews: [
      {
        id: 'r6',
        studentName: 'Kavita Reddy',
        rating: 5,
        comment: 'Best chemistry teacher in the area! My son cleared NEET thanks to him.',
        date: '2024-01-18'
      },
      {
        id: 'r7',
        studentName: 'Suresh Kumar',
        rating: 5,
        comment: 'Very dedicated teacher with excellent knowledge.',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '4',
    name: 'Pooja Agarwal',
    subjects: ['Mathematics', 'Science'],
    experience: 5,
    distance: 0.8,
    feeRange: { min: 500, max: 800 },
    rating: 4.5,
    reviewCount: 23,
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Very close, budget-friendly, good ratings',
    description: 'Young and energetic teacher with modern teaching methods. Specializes in classes 6-10.',
    qualifications: ['B.Sc - Delhi University', 'Pursuing B.Ed'],
    teachingStyle: 'Fun and interactive learning with real-life examples and digital tools.',
    availability: ['Monday-Friday: 4 PM - 7 PM'],
    phoneNumber: '+91 98765 43213',
    badges: ['Verified', 'Budget Friendly'],
    reviews: [
      {
        id: 'r8',
        studentName: 'Anjali Mishra',
        rating: 5,
        comment: 'My daughter loves her classes! Very friendly teacher.',
        date: '2024-01-14'
      },
      {
        id: 'r9',
        studentName: 'Vikram Shah',
        rating: 4,
        comment: 'Good teacher for school-level subjects.',
        date: '2024-01-03'
      }
    ]
  },
  {
    id: '5',
    name: 'Sanjay Rao',
    subjects: ['Computer Science', 'Mathematics'],
    experience: 10,
    distance: 1.5,
    feeRange: { min: 900, max: 1300 },
    rating: 4.7,
    reviewCount: 41,
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Tech expert, experienced, strong subject knowledge',
    description: 'Software engineer turned educator. Expert in programming, computer science, and mathematics.',
    qualifications: ['B.Tech Computer Science', 'Industry Experience - 5 years'],
    teachingStyle: 'Project-based learning with hands-on coding practice.',
    availability: ['Tuesday, Thursday, Saturday: 5 PM - 8 PM'],
    phoneNumber: '+91 98765 43214',
    badges: ['Verified', 'Tech Expert'],
    reviews: [
      {
        id: 'r10',
        studentName: 'Rohan Kapoor',
        rating: 5,
        comment: 'Excellent for computer science students. Real-world knowledge!',
        date: '2024-01-16'
      }
    ]
  },
  {
    id: '6',
    name: 'Meena Iyer',
    subjects: ['Social Studies', 'History'],
    experience: 7,
    distance: 1.8,
    feeRange: { min: 600, max: 900 },
    rating: 4.4,
    reviewCount: 28,
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    whyRecommended: 'Subject specialist, affordable, good track record',
    description: 'Passionate history teacher with engaging teaching style. Makes social studies interesting and easy to remember.',
    qualifications: ['MA History', 'B.Ed'],
    teachingStyle: 'Story-telling approach with visual aids and mnemonics.',
    availability: ['Monday-Friday: 3 PM - 6 PM'],
    phoneNumber: '+91 98765 43215',
    badges: ['Verified'],
    reviews: [
      {
        id: 'r11',
        studentName: 'Arjun Nair',
        rating: 4,
        comment: 'Makes history fun and easy to understand.',
        date: '2024-01-11'
      }
    ]
  }
];
