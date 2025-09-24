import Script from 'next/script';

type StructuredDataType = 'organization' | 'website' | 'person' | 'service';

interface StructuredDataProps {
    type: StructuredDataType;
    data?: unknown;
}

export default function StructuredData({ type }: StructuredDataProps) {
    const getStructuredData = (): Record<string, unknown> => {
        switch (type) {
            case 'organization':
                return {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "PUNE Training Company",
                    "alternateName": "PTC",
                    "description": "We partner with organizations to solve their training requirements and democratize the corporate training ecosystem through technology and innovation.",
                    "url": "https://punetrainingcompany.com",
                    "logo": "https://punetrainingcompany.com/logo.png",
                    "foundingDate": "2025",
                    "founder": {
                        "@type": "Person",
                        "name": "Nidhi Dhanju",
                        "jobTitle": "Founder & CEO",
                        "description": "HR professional with 20+ years of experience, PhD in Human Resource Development from University of Minnesota"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9876543210",
                        "contactType": "customer service",
                        "email": "info@punetrainingcompany.com"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/pune-training-company",
                        "https://twitter.com/punetrainingco",
                        "https://www.facebook.com/punetrainingcompany"
                    ],
                    "serviceArea": {
                        "@type": "Country",
                        "name": "India"
                    }
                };

            case 'website':
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "PUNE Training Company",
                    "url": "https://punetrainingcompany.com",
                    "description": "Democratizing corporate training by connecting organizations with expert training partners",
                    "publisher": {
                        "@type": "Organization",
                        "name": "PUNE Training Company"
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://punetrainingcompany.com/offerings?search={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                };

            case 'service':
                return {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Corporate Training Solutions",
                    "description": "Expert training partners for leadership development, digital marketing, agile methodology, HR analytics, sales training, and more",
                    "provider": {
                        "@type": "Organization",
                        "name": "PUNE Training Company"
                    },
                    "serviceType": "Corporate Training",
                    "areaServed": {
                        "@type": "Country",
                        "name": "India"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Training Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Leadership Development Training"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Digital Marketing Training"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Agile Methodology Training"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "HR Analytics Training"
                                }
                            }
                        ]
                    }
                };

            case 'person':
                return {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Nidhi Dhanju",
                    "jobTitle": "Founder & CEO",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "PUNE Training Company"
                    },
                    "description": "HR professional with 20+ years of experience in leadership roles at Michelin, Infosys, Praj and Thermax. PhD in Human Resource Development from University of Minnesota.",
                    "alumniOf": [
                        {
                            "@type": "CollegeOrUniversity",
                            "name": "Lady Shri Ram College, Delhi"
                        },
                        {
                            "@type": "CollegeOrUniversity",
                            "name": "University of Minnesota"
                        }
                    ],
                    "hasCredential": {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "PhD",
                        "educationalLevel": "Doctorate",
                        "about": "Human Resource Development"
                    }
                };

            default:
                return {} as Record<string, unknown>;
        }
    };

    return (
        <Script
            id={`structured-data-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getStructuredData()),
            }}
        />
    );
}
