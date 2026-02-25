'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="min-h-[90vh] relative flex flex-col items-center justify-center px-6 py-24 md:py-0">
			<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

			<div className="relative z-10 w-full max-w-4xl mx-auto text-center">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
					<motion.div 
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="inline-block px-4 py-1.5 rounded-full border border-surface-border dark:border-surface-darkBorder bg-surface/50 dark:bg-surface-dark/50 backdrop-blur-sm text-sm font-medium text-foreground/80 mb-4"
					>
						Available for new opportunities
					</motion.div>
					
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground text-balance">
						Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Rakesh Geddam</span>
					</h1>
					
					<h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mt-4">
						Software Engineer & Data Specialist
					</h2>
					
					<p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mt-6 leading-relaxed text-balance">
						I build scalable applications, robust data pipelines, and intelligent AI/ML solutions. Passionate about creating elegant, high-performance systems that solve complex problems.
					</p>

					<div className="flex flex-wrap justify-center gap-3 mt-10">
						{['Swift', 'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'AWS', 'Data Engineering', 'Machine Learning'].map((skill, index) => (
							<motion.span 
								key={skill}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + index * 0.05 }}
								className="px-4 py-2 bg-surface dark:bg-surface-dark border border-surface-border dark:border-surface-darkBorder rounded-lg text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md transition-shadow"
							>
								{skill}
							</motion.span>
						))}
					</div>

					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="mt-16 flex justify-center gap-4"
					>
						<a href="#projects" className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors">
							View Projects
						</a>
						<a href="#contact" className="px-6 py-3 bg-surface dark:bg-surface-dark border border-surface-border dark:border-surface-darkBorder text-foreground rounded-lg font-medium hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-colors">
							Contact Me
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
