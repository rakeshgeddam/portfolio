'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Publications', href: '#publications' },
	{ label: 'Contact', href: '#contact' },
];

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-background/80 backdrop-blur-md border-b border-surface-border dark:border-surface-darkBorder shadow-soft'
					: 'bg-transparent'
			}`}
		>
			<nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo / Name */}
				<a href="#" className="text-foreground font-bold text-lg tracking-tight hover:text-accent transition-colors">
					Rakesh<span className="text-accent">.</span>
				</a>

				{/* Desktop nav links */}
				<ul className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-colors"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop social / CTA */}
				<div className="hidden md:flex items-center gap-3">
					<a
						href="https://github.com/rakeshgeddam"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="p-2 text-foreground/60 hover:text-foreground hover:bg-surface-hover dark:hover:bg-surface-darkHover rounded-lg transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/rakeshge"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="p-2 text-foreground/60 hover:text-foreground hover:bg-surface-hover dark:hover:bg-surface-darkHover rounded-lg transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
					<a
						href="https://docs.google.com/document/d/1IHUkDVZpyLELh6aCLnAikBT-f4nwQxWA/edit?usp=sharing&ouid=109115267559826737312&rtpof=true&sd=true"
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-1.5 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
					>
						Resume
					</a>
				</div>

				{/* Mobile hamburger */}
				<button
					onClick={() => setMenuOpen((o) => !o)}
					aria-label="Toggle menu"
					className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-colors"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{menuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-md border-b border-surface-border dark:border-surface-darkBorder"
					>
						<ul className="px-6 py-4 flex flex-col gap-1">
							{navLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										onClick={() => setMenuOpen(false)}
										className="block px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
							<li className="pt-2 border-t border-surface-border dark:border-surface-darkBorder mt-2">
								<a
									href="https://docs.google.com/document/d/1IHUkDVZpyLELh6aCLnAikBT-f4nwQxWA/edit?usp=sharing&ouid=109115267559826737312&rtpof=true&sd=true"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-center px-4 py-2.5 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
								>
									View Resume
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
