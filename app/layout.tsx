import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rakesh Geddam - Software Engineer',
	description:
		'Portfolio of Rakesh Geddam, a Software Engineer specializing in full-stack development, cloud data engineering, and AI/ML solutions.',
	keywords: [
		'Software Engineer',
		'Full-Stack Developer',
		'Data Engineer',
		'AI/ML',
		'React',
		'Next.js',
		'Python',
		'TypeScript',
		'AWS',
		'Rakesh Geddam',
	],
	authors: [{ name: 'Rakesh Geddam' }],
	creator: 'Rakesh Geddam',
	openGraph: {
		title: 'Rakesh Geddam - Software Engineer',
		description:
			'Portfolio of Rakesh Geddam, a Software Engineer specializing in full-stack development, cloud data engineering, and AI/ML solutions.',
		url: 'https://rakeshgeddam.github.io',
		siteName: 'Rakesh Geddam - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Rakesh Geddam - Software Engineer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rakesh Geddam - Software Engineer',
		description:
			'Portfolio of Rakesh Geddam, a Software Engineer specializing in full-stack development, cloud data engineering, and AI/ML solutions.',
		creator: '@rakeshgeddam',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>{children}</body>
		</html>
	);
}
