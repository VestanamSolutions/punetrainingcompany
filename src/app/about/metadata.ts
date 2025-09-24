import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - PUNE Training Company | Democratizing Corporate Training',
    description: 'Learn about PUNE Training Company\'s mission to democratize corporate training. Founded by Nidhi Dhanju, we connect organizations with expert training partners to solve training requirements.',
    keywords: ['about pune training company', 'nidhi dhanju', 'corporate training founder', 'training democratization', 'pune training story'],
    openGraph: {
        title: 'About PUNE Training Company - Our Story & Mission',
        description: 'Discover how PUNE Training Company is revolutionizing corporate training by connecting organizations with expert training partners.',
        type: 'website',
        images: [
            {
                url: '/about-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'About PUNE Training Company',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About PUNE Training Company - Our Story & Mission',
        description: 'Discover how PUNE Training Company is revolutionizing corporate training by connecting organizations with expert training partners.',
    },
};
