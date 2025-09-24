export interface TrainingPartner {
    id: number;
    name: string;
    expertise: string[];
    description: string;
    experience: string;
    rating: number;
    reviews: number;
    image: string;
    location: string;
    specializations: string[];
    certifications: string[];
    languages: string[];
    availability: 'Available' | 'Busy' | 'Limited';
    price: string;
    contact: {
        email: string;
        phone: string;
        linkedin?: string;
    };
}

export const trainingPartners: TrainingPartner[] = [
    {
        id: 1,
        name: "Dr. Rajesh Kumar",
        expertise: ["Leadership Development", "Team Management", "Strategic Planning"],
        description: "Experienced corporate trainer with 15+ years in leadership development and organizational behavior. Specializes in transforming teams and building high-performance cultures.",
        experience: "15+ years",
        rating: 4.9,
        reviews: 127,
        image: "/trainers/trainer1.jpg",
        location: "Mumbai, Maharashtra",
        specializations: ["Executive Coaching", "Change Management", "Performance Management"],
        certifications: ["ICF Certified Coach", "PMP", "Six Sigma Black Belt"],
        languages: ["English", "Hindi", "Marathi"],
        availability: "Available",
        price: "₹25,000 - ₹40,000 per day",
        contact: {
            email: "rajesh.kumar@email.com",
            phone: "+91-9876543210",
            linkedin: "linkedin.com/in/rajeshkumar"
        }
    },
    {
        id: 2,
        name: "Priya Sharma",
        expertise: ["Digital Marketing", "Social Media Strategy", "Content Marketing"],
        description: "Digital marketing expert with proven track record in helping companies build strong online presence and drive customer engagement through innovative strategies.",
        experience: "12+ years",
        rating: 4.8,
        reviews: 94,
        image: "/trainers/trainer2.jpg",
        location: "Bangalore, Karnataka",
        specializations: ["SEO/SEM", "Analytics", "Brand Strategy"],
        certifications: ["Google Analytics Certified", "Facebook Blueprint", "HubSpot Certified"],
        languages: ["English", "Hindi", "Kannada"],
        availability: "Available",
        price: "₹20,000 - ₹35,000 per day",
        contact: {
            email: "priya.sharma@email.com",
            phone: "+91-9876543211",
            linkedin: "linkedin.com/in/priyasharma"
        }
    },
    {
        id: 3,
        name: "Amit Patel",
        expertise: ["Agile Methodology", "Scrum Master Training", "Project Management"],
        description: "Certified Scrum Master and Agile coach helping organizations transition to agile methodologies and improve project delivery efficiency.",
        experience: "10+ years",
        rating: 4.7,
        reviews: 156,
        image: "/trainers/trainer3.jpg",
        location: "Pune, Maharashtra",
        specializations: ["Scrum", "Kanban", "DevOps", "Product Management"],
        certifications: ["Certified Scrum Master", "SAFe Agilist", "PMP"],
        languages: ["English", "Hindi", "Gujarati"],
        availability: "Busy",
        price: "₹30,000 - ₹45,000 per day",
        contact: {
            email: "amit.patel@email.com",
            phone: "+91-9876543212",
            linkedin: "linkedin.com/in/amitpatel"
        }
    },
    {
        id: 4,
        name: "Sneha Reddy",
        expertise: ["HR Analytics", "Talent Management", "Employee Engagement"],
        description: "HR professional specializing in people analytics and talent development strategies. Expert in designing engagement programs that drive organizational success.",
        experience: "8+ years",
        rating: 4.6,
        reviews: 73,
        image: "/trainers/trainer4.jpg",
        location: "Hyderabad, Telangana",
        specializations: ["HRIS", "Recruitment", "Performance Analytics", "Diversity & Inclusion"],
        certifications: ["SHRM-CP", "PHR", "People Analytics Certified"],
        languages: ["English", "Hindi", "Telugu"],
        availability: "Available",
        price: "₹18,000 - ₹28,000 per day",
        contact: {
            email: "sneha.reddy@email.com",
            phone: "+91-9876543213",
            linkedin: "linkedin.com/in/snehareddy"
        }
    },
    {
        id: 5,
        name: "Vikram Singh",
        expertise: ["Sales Training", "Negotiation Skills", "Customer Relationship"],
        description: "Sales training expert with extensive experience in B2B and B2C sales. Specializes in consultative selling and building long-term customer relationships.",
        experience: "14+ years",
        rating: 4.8,
        reviews: 112,
        image: "/trainers/trainer5.jpg",
        location: "Delhi, NCR",
        specializations: ["B2B Sales", "CRM", "Sales Psychology", "Account Management"],
        certifications: ["Certified Sales Professional", "Sandler Sales Training", "SPIN Selling"],
        languages: ["English", "Hindi", "Punjabi"],
        availability: "Limited",
        price: "₹22,000 - ₹38,000 per day",
        contact: {
            email: "vikram.singh@email.com",
            phone: "+91-9876543214",
            linkedin: "linkedin.com/in/vikramsingh"
        }
    },
    {
        id: 6,
        name: "Kavitha Nair",
        expertise: ["Finance & Accounting", "Financial Planning", "Risk Management"],
        description: "Finance professional with expertise in corporate finance, budgeting, and financial analysis. Helps organizations optimize their financial processes and decision-making.",
        experience: "11+ years",
        rating: 4.7,
        reviews: 89,
        image: "/trainers/trainer6.jpg",
        location: "Chennai, Tamil Nadu",
        specializations: ["Financial Modeling", "Treasury Management", "Compliance", "Internal Audit"],
        certifications: ["CPA", "CFA", "FRM"],
        languages: ["English", "Hindi", "Tamil"],
        availability: "Available",
        price: "₹28,000 - ₹42,000 per day",
        contact: {
            email: "kavitha.nair@email.com",
            phone: "+91-9876543215",
            linkedin: "linkedin.com/in/kavithanair"
        }
    },
    {
        id: 7,
        name: "Ravi Gupta",
        expertise: ["Data Science", "Machine Learning", "Business Intelligence"],
        description: "Data scientist and analytics expert helping organizations leverage data for strategic decision-making and business growth through advanced analytics and ML solutions.",
        experience: "9+ years",
        rating: 4.9,
        reviews: 68,
        image: "/trainers/trainer7.jpg",
        location: "Bangalore, Karnataka",
        specializations: ["Python", "R", "SQL", "Tableau", "Power BI", "AI/ML"],
        certifications: ["Google Cloud ML Engineer", "AWS Data Analytics", "Microsoft Azure Data Scientist"],
        languages: ["English", "Hindi"],
        availability: "Available",
        price: "₹35,000 - ₹50,000 per day",
        contact: {
            email: "ravi.gupta@email.com",
            phone: "+91-9876543216",
            linkedin: "linkedin.com/in/ravigupta"
        }
    },
    {
        id: 8,
        name: "Meera Joshi",
        expertise: ["Communication Skills", "Public Speaking", "Presentation Skills"],
        description: "Communication coach and trainer specializing in helping professionals improve their presentation skills, public speaking abilities, and overall communication effectiveness.",
        experience: "13+ years",
        rating: 4.8,
        reviews: 145,
        image: "/trainers/trainer8.jpg",
        location: "Mumbai, Maharashtra",
        specializations: ["Executive Presence", "Storytelling", "Cross-cultural Communication", "Media Training"],
        certifications: ["Toastmasters International", "Dale Carnegie Certified", "NLP Practitioner"],
        languages: ["English", "Hindi", "Marathi"],
        availability: "Available",
        price: "₹20,000 - ₹32,000 per day",
        contact: {
            email: "meera.joshi@email.com",
            phone: "+91-9876543217",
            linkedin: "linkedin.com/in/meerajoshi"
        }
    }
];

export const trainingCategories = [
    "Leadership Development",
    "Digital Marketing",
    "Agile Methodology",
    "HR Analytics",
    "Sales Training",
    "Finance & Accounting",
    "Data Science",
    "Communication Skills",
    "Project Management",
    "Team Management",
    "Strategic Planning",
    "Change Management",
    "Performance Management",
    "Employee Engagement",
    "Customer Relationship",
    "Risk Management",
    "Business Intelligence",
    "Public Speaking"
];
