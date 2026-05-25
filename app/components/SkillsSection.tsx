'use client';

import { motion } from 'framer-motion';

const skillCategories = [
	{
		category: 'Languages',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>
		),
		skills: ['Python', 'TypeScript', 'JavaScript', 'Swift', 'SQL', 'Java', 'Bash'],
	},
	{
		category: 'Frontend',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
			</svg>
		),
		skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
	},
	{
		category: 'Backend & APIs',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
			</svg>
		),
		skills: ['Node.js', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL', 'WordPress/PHP'],
	},
	{
		category: 'Data & ML',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
			</svg>
		),
		skills: ['Apache Spark', 'Kafka', 'Airflow', 'TensorFlow', 'PyTorch', 'Pandas', 'Vector DB'],
	},
	{
		category: 'Cloud & DevOps',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
			</svg>
		),
		skills: ['AWS (EMR, S3, Lambda)', 'Docker', 'CI/CD', 'Linux', 'Git', 'Vercel'],
	},
	{
		category: 'AI & LLMs',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
		),
		skills: ['OpenAI API', 'Gemini 2.0', 'LangChain', 'Fine-tuning', 'RAG', 'Prompt Engineering'],
	},
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-24 px-6 bg-background">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Skills & Technologies</h2>
					<p className="text-foreground/60 mt-4 text-lg">A snapshot of my technical toolkit across the full engineering stack.</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories.map((cat, catIdx) => (
						<motion.div
							key={cat.category}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: catIdx * 0.08 }}
							className="bg-surface dark:bg-surface-dark rounded-2xl border border-surface-border dark:border-surface-darkBorder p-6 hover:border-accent/40 dark:hover:border-accent/40 transition-colors duration-300"
						>
							<div className="flex items-center gap-3 mb-5">
								<span className="p-2 bg-accent/10 text-accent rounded-lg">{cat.icon}</span>
								<h3 className="font-semibold text-foreground">{cat.category}</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{cat.skills.map((skill, skillIdx) => (
									<motion.span
										key={skill}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: catIdx * 0.06 + skillIdx * 0.04 }}
										className="px-3 py-1.5 bg-background dark:bg-[#121212] border border-surface-border dark:border-surface-darkBorder rounded-lg text-xs font-medium text-foreground/80 hover:border-accent/50 hover:text-accent transition-colors duration-200"
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
