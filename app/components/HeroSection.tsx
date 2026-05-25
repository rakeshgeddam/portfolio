'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="min-h-screen relative flex flex-col items-center justify-center px-6 pt-32 pb-24">
			<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

			<div className="relative z-10 w-full max-w-4xl mx-auto text-center">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
					{/* Availability badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-4"
					>
						<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
						Open to new opportunities
					</motion.div>

					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground text-balance">
						Hi, I&apos;m{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
							Rakesh Geddam
						</span>
					</h1>

					<h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mt-4">
						Full-Stack Engineer &amp; AI/Data Specialist
					</h2>

					<p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mt-6 leading-relaxed text-balance">
						I turn complex problems into elegant, production-ready solutions — from fine-tuning LLMs and building
						real-time data pipelines to shipping iOS apps. 4+ years of experience across healthcare, logistics, and research.
					</p>

					{/* CTA row */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="mt-10 flex flex-wrap justify-center gap-4"
					>
						<a
							href="#projects"
							className="px-7 py-3.5 bg-foreground text-background rounded-xl font-semibold hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-0.5 shadow-soft hover:shadow-soft-hover"
						>
							View My Work
						</a>
						<a
							href="https://docs.google.com/document/d/1IHUkDVZpyLELh6aCLnAikBT-f4nwQxWA/edit?usp=sharing&ouid=109115267559826737312&rtpof=true&sd=true"
							target="_blank"
							rel="noopener noreferrer"
							className="px-7 py-3.5 bg-surface dark:bg-surface-dark border border-surface-border dark:border-surface-darkBorder text-foreground rounded-xl font-semibold hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-all duration-300 hover:-translate-y-0.5"
						>
							Download Resume
						</a>
						<a
							href="#contact"
							className="px-7 py-3.5 bg-accent/10 text-accent border border-accent/20 rounded-xl font-semibold hover:bg-accent/20 transition-all duration-300 hover:-translate-y-0.5"
						>
							Contact Me
						</a>
					</motion.div>

					{/* Social proof / quick links */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-foreground/50"
					>
						<a
							href="https://github.com/rakeshgeddam"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-foreground transition-colors"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							github.com/rakeshgeddam
						</a>
						<span>·</span>
						<a
							href="https://linkedin.com/in/rakeshge"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-foreground transition-colors"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
							linkedin.com/in/rakeshge
						</a>
						<span>·</span>
						<span className="flex items-center gap-1.5">
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Detroit, MI
						</span>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/30"
			>
				<span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</motion.div>
			</motion.div>
		</section>
	);
}
