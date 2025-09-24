import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Training Partners & Offerings - PUNE Training Company',
    description: 'Explore our network of expert training partners specializing in leadership development, digital marketing, agile methodology, HR analytics, and more. Book meetings with verified trainers.',
    keywords: ['training partners', 'corporate training experts', 'leadership development', 'digital marketing training', 'agile training', 'hr analytics', 'sales training', 'pune trainers'],
    openGraph: {
        title: 'Expert Training Partners - PUNE Training Company',
        description: 'Connect with verified training professionals across diverse domains. Find the perfect trainer for your organization\'s needs.',
        type: 'website',
        images: [
            {
                url: '/offerings-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'PUNE Training Company Training Partners',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Expert Training Partners - PUNE Training Company',
        description: 'Connect with verified training professionals across diverse domains. Find the perfect trainer for your organization\'s needs.',
    },
};
