import { FitnessProgram, Trainer, PricingTier, Testimonial, FAQItem } from './types';

export const HERO_DATA = {
  headline: "Transform Your Body. Build Your Strength.",
  subheadline: "Join the fitness community that helps you achieve real, lasting results. Our state-of-the-art facility, elite certified coaches, and custom program tracks are engineered to unlock your absolute athletic peak.",
  bgImage: "/src/assets/images/hero_bg_1780308535850.png"
};

export const CHOOSE_US_CARDS = [
  {
    id: "equipment",
    title: "Modern Equipment",
    description: "Train with top-tier Hammer Strength, Eleiko plate-loaded machines, and high-performance cardio suites built for safety and optimal muscle engagement.",
    iconName: "Dumbbell"
  },
  {
    id: "trainers",
    title: "Certified Trainers",
    description: "Get personalized guidance from specialized nutritionists, injury prevention specialists, and seasoned strength coaches with proven track records.",
    iconName: "ShieldCheck"
  },
  {
    id: "memberships",
    title: "Flexible Memberships",
    description: "No predatory contracts or hidden dynamic maintenance fees. Pause, upgrade, or change your package smoothly with clear client sovereignty.",
    iconName: "Layers"
  },
  {
    id: "nutrition",
    title: "Nutrition Support",
    description: "Unlock structural transformation with custom dynamic meal planning guidance, macro-nutrient optimization, and integrated biometric audits.",
    iconName: "Apple"
  }
];

export const FITNESS_PROGRAMS: FitnessProgram[] = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    shortDescription: "Hypertrophy-focused resistance training engineered to add lean skeletal muscle mass and sculpt a powerful athletic shape.",
    detailedDescription: "This curriculum prioritizes mechanical tension and progressive overload to build significant muscular density. Safe form, tempo control, and targeted compound movements are mastered to turn energy into powerful physical frame expansion.",
    benefits: [
      "Significant skeletal muscle hypertrophy and structural density",
      "Optimized metabolic rate to support calorie burning post-workout",
      "Enhanced joint safety due to muscular stabilization support",
      "Custom macro-coaching protocols to ensure clean physical growth"
    ],
    duration: "12 Weeks (4-5 sessions/week)",
    intensity: "Intermediate",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "strength-training",
    title: "Strength Training",
    shortDescription: "Plates, platforms, and steel. Unleash absolute neuromuscular power through structured heavy compound lifts.",
    detailedDescription: "Learn true powerlifting and Olympic structural lift mechanics. Your program centerpieces Squats, Deadlifts, Bench Presses, and Overhead work. Designed to recruit maximum motor units, bulletproof your skeleton, and dramatically spike your absolute numbers.",
    benefits: [
      "Stark gains in absolute central nervous system recruitment and maximum force",
      "Stiffened connective tissues and optimized bone mineral density",
      "Professional compound lifting form and injury mitigation mastery",
      "Shatter lifetime lifting bottlenecks with periodized load programming"
    ],
    duration: "8 Weeks (3-4 sessions/week)",
    intensity: "Advanced",
    imageUrl: "/src/assets/images/program_strength_1780308555856.png"
  },
  {
    id: "weight-loss",
    title: "Weight Loss & Conditioning",
    shortDescription: "High-intensity metabolic conditioning paired with structural strength work to fuel fast and sustainable fat reduction.",
    detailedDescription: "Step away from monotonous cardio. This metabolic program uses intelligent multi-joint loading schemas, kettlebells, rowing, and functional speed intervals. Perfect for shedding visceral white fat while safeguarding hard-earned athletic lean mass.",
    benefits: [
      "Rapid reduction of body lipid percentage while retaining active muscle",
      "Dramatically boosted VO2 Max and stamina for daily activities",
      "Engaging metabolic circuits that prevent conditioning fatigue",
      "Heart rate zone optimization with real-time biometric metrics"
    ],
    duration: "10 Weeks (4 sessions/week)",
    intensity: "Beginner",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "personal-coaching",
    title: "Personal Coaching",
    shortDescription: "One-on-one elite guidance with customized workout mapping, metabolic profiling, and accountability frameworks.",
    detailedDescription: "Get the highest level of personal focus. A certified personal coach works side-by-side with you to perfect your execution, continuously calibrate set volume, outline weekly recovery metrics, and deliver the ironclad mental motivation needed to achieve elite results.",
    benefits: [
      "100% bespoke workout mapping suited for specific physical goals",
      "Individual physical assessment to balance structural muscle discrepancies",
      "Maximum performance accountability and personalized motivation",
      "Bi-weekly private metric testing and biometric evaluation panels"
    ],
    duration: "Flexible (Ongoing subscription)",
    intensity: "All Levels",
    imageUrl: "/src/assets/images/coach_fistbump_1780308573956.png"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    shortDescription: "Improve multi-planar movement, relative core power, and joint mobility to prepare the body for real-world athletics.",
    detailedDescription: "Train your body to work as a fluid, singular machine. Utilizing kettlebells, pull-up systems, suspension, and stability work, this class builds the structural integrity, balance, and athletic readiness needed to excel in active sports and maintain pain-free master mechanics.",
    benefits: [
      "Total body coordination across all dynamic anatomical planes",
      "Core power density and balanced kinetic chains",
      "Enhanced active joint flexibility and physical resilience",
      "Corrects posture, seating stiffness, and movement patterns"
    ],
    duration: "6 Weeks (3 sessions/week)",
    intensity: "All Levels",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    specialization: "Strength Training & Olympic Lifting",
    experienceYears: 12,
    certifications: [
      "CSCS (Certified Strength and Conditioning Specialist)",
      "USA Powerlifting (USAPL) Club Coach",
      "BS in Exercise Physiology"
    ],
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop",
    bio: "Marcus has spent over a decade preparing elite regional collegiate powerlifters and strongman contestants. His training system is grounded on optimal movement biomechanics, zero-gravity posture, and systematic metric progression.",
    stats: {
      clientsHelped: 480,
      successRate: "97%"
    }
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    specialization: "Weight Loss & Functional Hypertrophy",
    experienceYears: 8,
    certifications: [
      "NASM Certified Personal Trainer (CPT)",
      "FMS (Functional Movement Screen) Level 2",
      "Precision Nutrition Level 1 (PN1)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop",
    bio: "Sarah designs high-intensity functional conditioning programs that keep clients excited while driving maximum metabolic efficiency. She believes fitness is a mental anchor that transforms every other field of a person's life.",
    stats: {
      clientsHelped: 350,
      successRate: "94%"
    }
  },
  {
    id: "alex-rodriguez",
    name: "Alex Rodriguez",
    specialization: "Body Recomposition & Biomechanics",
    experienceYears: 9,
    certifications: [
      "ISSA Master Trainer Certification",
      "ACE Medical Exercise Specialist",
      "Optimized Hypertrophy Systems Instructor"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
    bio: "Alex specializes in body-recomposition strategies—simultaneously burning fat and packing on structural muscle. He applies scientific hyper-intensity variables to customize plans for individuals looking for distinct aesthetic change.",
    stats: {
      clientsHelped: 390,
      successRate: "95%"
    }
  }
];

export const PRICING_PLANS: PricingTier[] = [
  {
    id: "basic",
    name: "Basic Access",
    priceMonthly: 39,
    priceAnnually: 29,
    description: "Designed for self-directed lifters seeking high-grade, premium training equipment and facility independence.",
    features: [
      "Unlimited Gym Access (5 AM - 11 PM)",
      "Premium Locker & Digital Keycard Use",
      "Access to all plate-loaded machinery",
      "High-speed locker shower & amenities access",
      "One complimentary biomechanic physical audit"
    ],
    isPopular: false,
    ctaText: "Choose Basic"
  },
  {
    id: "pro",
    name: "Pro Experience",
    priceMonthly: 69,
    priceAnnually: 49,
    description: "Our complete baseline package. Amplifies self-directed work with collaborative multi-user live coaching classes.",
    features: [
      "Unlimited Gym Access (24/7 VIP Access)",
      "Full Booking of all Group Vitality Classes",
      "Premium Locker, Towel Service & Shower access",
      "Functional fitness turf & kettlebell zone access",
      "Monthly 3D biometric body composition scanning",
      "10% discount at the on-site IronBar café"
    ],
    isPopular: true,
    ctaText: "Choose Pro Experience"
  },
  {
    id: "elite",
    name: "Elite Performance",
    priceMonthly: 149,
    priceAnnually: 119,
    description: "The ultimate peak physical transformation pipeline. Complete high-touch expert accountability and customized guidance.",
    features: [
      "Everything in the PRO Access Tier",
      "Private Personal Coach (2 sessions/week)",
      "Daily dynamic nutritional & macro configuration",
      "Individual private locker & pre-filled laundry bag service",
      "Unlimited Premium Recovery Lounge & Steam Room use",
      "Full online support & custom mobile progress visualizer",
      "Free IronForge performance training t-shirt"
    ],
    isPopular: false,
    ctaText: "Choose Elite Performance"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "user-1",
    name: "Catherine Reed",
    role: "Digital Systems Architect",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "IronForge changed everything about how I view health. I went from being completely stiff and desk-bound to lifting twice my body weight while maintaining pristine joints. The certified coach system is a genuine game changer.",
    rating: 5,
    achievement: "Lost 22 lbs & Gained 8 lbs Muscle"
  },
  {
    id: "user-2",
    name: "Marcus Holloway",
    role: "Product Director",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "The facility is immaculate, the community is focused, and there's never a wait for weightlifting squat racks. Elite coaching keeps me injury-free and consistent even with a busy international schedule.",
    rating: 5,
    achievement: "Shattered deadlift bottleneck at 405 lbs"
  },
  {
    id: "user-3",
    name: "Jessica Chen",
    role: "Lead UI Designer",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=85&w=200&auto=format&fit=crop",
    quote: "I am absolutely selective about design, aesthetics, and organization. IronForge hits the sweet spot—stunning layouts, dark atmospheric space that limits sensory overload, and deeply professional staff who know their stuff.",
    rating: 5,
    achievement: "Optimized posture & increased cardiovascular endurance"
  }
];

export const FAQs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Membership",
    question: "How do your membership commitments work? Can I cancel anytime?",
    answer: "Our Pro and Elite plans offer an outright month-to-month flexibility. If you opt for our annual billing tier, you save 25% on your rates with an annual commitment. Standard month-to-month options can be cancelled with a simple 14-day digital notice through our membership portal with zero exit penalties."
  },
  {
    id: "faq-2",
    category: "Training",
    question: "I am an absolute beginner. Are your programs suitable for me?",
    answer: "Yes, 100%! We offer dedicated Beginner fitness tracks (such as Weight Loss & Functional Training) where safety and lift baseline techniques are heavily emphasizes. Our coaches are certified functional assessment instructors who will guide you from ground zero."
  },
  {
    id: "faq-3",
    category: "Amenities",
    question: "Do you have parking and shower amenities?",
    answer: "Yes. IronForge features a private client parking lot with camera protection. Our changing chambers are equipped with high-grade digital locker locks, pristine rainfall showers, premium organic grooming amenities, hair dryers, and steam rooms."
  },
  {
    id: "faq-4",
    category: "Coaching",
    question: "Can I swap personal coaches during my athletic program?",
    answer: "Our commitment is your ongoing comfortable advancement. If you feel a different trainer's coaching style aligns better with your target goals, you can request an instant, hassle-free transition via your dashboard or the concierge desk with zero awkwardness."
  }
];

export const PORTFOLIO_CASE_STUDY = {
  projectName: "IronForge Fitness Portfolio Mockup",
  projectType: "Fitness Business Conversion System",
  overallGoal: "Increase local gym membership signups and showcase elite custom strength coaching services via a modern, high-energy digital user experience.",
  deliverables: [
    { name: "Single-Page App In-Memory Router", desc: "Allows fluid transitions between pages without typical server latency or flickering." },
    { name: "Interactive Plan Comparison Engine", desc: "An intelligent toggle that allows potential clients to analyze different pricing layouts on a monthly or annual scale." },
    { name: "Trainer & Program Filtration Columns", desc: "Helps users match their physical goals with specialized physical trainers and programs quickly." },
    { name: "Local State Message Logger", desc: "Simulates actual backend storage of inquiry messages, so developers can test form validation states instantly." }
  ],
  outcomes: [
    "A gorgeous, high-contrast user interface that portrays premium luxury and high physical performance.",
    "Responsive grid components optimized for flawless browsing across extreme mobile viewports, tablets, and wide screens.",
    "Professional, crisp typography pairings emphasizing physical power (heavy headlines) and readability (highly accessible body texts)."
  ]
};
