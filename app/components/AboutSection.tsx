'use client';

import { motion } from 'framer-motion';

const stats = [
	{ value: '4+', label: 'Years of Experience' },
	{ value: '6+', label: 'Projects Shipped' },
	{ value: '1', label: 'Published Paper' },
	{ value: '3', label: 'Companies' },
];

export default function AboutSection() {
	return (
		<section id="about" className="py-24 px-6 bg-surface dark:bg-surface-dark border-t border-surface-border dark:border-surface-darkBorder">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">About Me</h2>
					<p className="text-foreground/60 mt-4 text-lg">Background, education, and what drives me.</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Bio */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-5 text-foreground/70 leading-relaxed"
					>
						<p>
							I&apos;m a <span className="text-foreground font-medium">Software Engineer & Data Specialist</span> with 4+ years of
							hands-on experience building full-stack applications, scalable data pipelines, and AI/ML-powered solutions across
							healthcare, logistics, and research domains.
						</p>
						<p>
							My work spans from fine-tuning large language models (Gemini 2.0) and designing real-time streaming architectures with
							Kafka & Spark, to shipping iOS apps with Swift. I care about writing clean, maintainable code that solves real problems
							at scale.
						</p>
						<p>
							I hold an <span className="text-foreground font-medium">M.S. in Computer Science & Information Systems</span> from the{' '}
							<span className="text-foreground font-medium">University of Michigan – Flint</span>, where I also served as a Research
							Assistant contributing to peer-reviewed ASME publications on molecular dynamics simulations.
						</p>
						<p>
							I&apos;m currently based in <span className="text-foreground font-medium">Detroit, MI</span> and open to full-time
							opportunities in software engineering, data engineering, or AI/ML engineering.
						</p>
					</motion.div>

					{/* Stats + Education card */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						{/* Stats grid */}
						<div className="grid grid-cols-2 gap-4">
							{stats.map((stat, i) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.08 }}
									className="bg-background dark:bg-[#121212] rounded-2xl border border-surface-border dark:border-surface-darkBorder p-6 text-center"
								>
									<div className="text-3xl font-extrabold text-accent">{stat.value}</div>
									<div className="text-sm text-foreground/60 mt-1 font-medium">{stat.label}</div>
								</motion.div>
							))}
						</div>

						{/* Education card */}
						<div className="bg-background dark:bg-[#121212] rounded-2xl border border-surface-border dark:border-surface-darkBorder p-6 space-y-4">
							<h3 className="text-foreground font-semibold text-lg flex items-center gap-2">
								<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 17c0 2.21-4.03 4-9 4s-9-1.79-9-4c0-1.24.87-2.37 2.84-3.422L12 14z" />
								</svg>
								Education
							</h3>
							<div className="space-y-3">
								<div className="border-l-2 border-accent pl-4">
									<p className="text-foreground font-medium text-sm">M.S. Computer Science & Information Systems</p>
									<p className="text-foreground/60 text-sm">University of Michigan – Flint</p>
									<p className="text-foreground/40 text-xs mt-0.5">2023 – 2025</p>
								</div>
								<div className="border-l-2 border-surface-border dark:border-surface-darkBorder pl-4">
									<p className="text-foreground font-medium text-sm">B.Tech. Electronics & Communication Engineering</p>
									<p className="text-foreground/60 text-sm">JNTU – Hyderabad, India</p>
									<p className="text-foreground/40 text-xs mt-0.5">2016 – 2020</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
