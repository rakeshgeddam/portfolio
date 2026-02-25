'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		name: 'FocusGuardian iOS App',
		url: 'https://fcs-grdn-website.vercel.app/',
		description: 'Swift iOS application featuring AI-powered scheduling and intelligent notification blocking to enhance productivity and focus.',
		language: 'Swift',
		thumbnail: '/thumbnails/focusguardian.svg',
	},
	{
		name: 'AI Powered Tech Mentor',
		url: 'https://github.com/rakeshgeddam/AI_Powered_Tech_Mentor',
		description: 'AI-powered mentor platform for personalized tech guidance and learning. Built with modern web technologies to provide an interactive learning experience.',
		language: 'TypeScript',
		thumbnail: '/thumbnails/ai_mentor.png',
	},
	{
		name: 'Smart Code Editor',
		url: 'https://github.com/rakeshgeddam/Smart_Code_Editor',
		description: 'Code editor powered by Vector Database to retrieve error support from historical logs. Enhances developer productivity with intelligent suggestions.',
		language: 'Python',
		thumbnail: '/thumbnails/samrt-code-editor.png',
	},
	{
		name: 'AWS EMR ADHD',
		url: 'https://github.com/rakeshgeddam/AWS_EMR_ADHD',
		description: 'Project leveraging AWS EMR for scalable data processing. Designed to handle large datasets efficiently using distributed computing.',
		language: 'Python',
		thumbnail: '/thumbnails/AWS_EMR.png',
	},
	{
		name: 'Real-Time Logistics Assistant',
		url: 'https://github.com/rakeshgeddam/Logistics_Assistant',
		description: 'End-to-end real-time event logistics assistant with Kafka, Spark Streaming, and Airflow, integrating traffic APIs and automated workflows.',
		language: 'Data Engineering',
		thumbnail: '/thumbnails/logistics.svg',
	},
	{
		name: 'IPL Data Transformation',
		url: 'https://github.com/rakeshgeddam/Data_Transformation_using_Apache_Spark',
		description: 'Data Transformation project using Apache Spark on IPL cricket tournament dataset, demonstrating scalable data processing capabilities.',
		language: 'Apache Spark',
		thumbnail: '/thumbnails/spark.svg',
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-24 px-6 bg-surface dark:bg-surface-dark">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Featured Projects</h2>
					<p className="text-foreground/60 mt-4 max-w-2xl text-lg">A selection of my recent work in software engineering, AI, and data processing.</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							key={project.url}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group block bg-background dark:bg-[#121212] rounded-2xl overflow-hidden border border-surface-border dark:border-surface-darkBorder hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300 hover:shadow-soft-hover dark:hover:shadow-soft-hover-dark"
						>
							{project.thumbnail && (
								<div className="relative h-56 overflow-hidden bg-surface-hover dark:bg-surface-darkHover">
									<img
										src={project.thumbnail}
										alt={project.name + ' thumbnail'}
										className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							)}
							<div className="p-8">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{project.name}</h3>
									<span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{project.language}</span>
								</div>
								<p className="text-foreground/70 leading-relaxed text-sm">{project.description}</p>
								<div className="mt-6 flex items-center text-sm font-medium text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
									{project.url.includes('github.com') ? 'View Repository' : 'View Project'}
									<svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
