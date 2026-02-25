'use client';

import { motion } from 'framer-motion';

const publications = [
	{
		title: 'The High Strain-Rate Impact Energy-Absorption Characteristics of Graphene Using Molecular Dynamics (MD) Simulations',
		authors: 'Olanrewaju Aluko, Rakesh Geddam',
		conference: 'ASME 2024 International Mechanical Engineering Congress and Exposition (IMECE)',
		date: 'Published 2024',
		url: 'https://asmedigitalcollection.asme.org/IMECE/proceedings-abstract/IMECE2024/88681/V010T12A032/1212088',
		description: 'Employed molecular dynamics (MD) simulations to explore the nanoscale behaviors of 2D monolayer graphene experiencing high strain impact tests. Assessed atomistic and complex deformation and damage mechanisms, as well as its energy-absorbing capacity under high velocity impact ranging from 1 to 10 km/s.',
		tags: ['Molecular Dynamics', 'Nanoscale', 'Graphene', 'Data Simulation'],
	}
];

export default function PublicationsSection() {
	return (
		<section id="publications" className="py-24 px-6 bg-surface dark:bg-surface-dark border-t border-surface-border dark:border-surface-darkBorder">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Publications & Research</h2>
					<p className="text-foreground/60 mt-4 text-lg">Academic contributions and published research papers.</p>
				</motion.div>

				<div className="space-y-8">
					{publications.map((pub, index) => (
						<motion.div
							key={pub.url}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group relative bg-background dark:bg-[#121212] rounded-2xl p-8 border border-surface-border dark:border-surface-darkBorder hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300 hover:shadow-soft-hover dark:hover:shadow-soft-hover-dark"
						>
							<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
								<div className="flex-1 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
											{pub.title}
										</h3>
										<p className="text-foreground/80 font-medium">{pub.authors}</p>
										<p className="text-foreground/60 text-sm">{pub.conference} • {pub.date}</p>
									</div>
									
									<p className="text-foreground/70 leading-relaxed text-sm md:text-base">
										{pub.description}
									</p>

									<div className="flex flex-wrap gap-2 pt-2">
										{pub.tags.map(tag => (
											<span key={tag} className="px-3 py-1 bg-surface-hover dark:bg-surface-darkHover text-foreground/70 rounded-full text-xs font-medium">
												{tag}
											</span>
										))}
									</div>
								</div>

								<div className="shrink-0">
									<a
										href={pub.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-6 py-3 bg-surface dark:bg-surface-dark border border-surface-border dark:border-surface-darkBorder text-foreground rounded-xl font-medium hover:bg-surface-hover dark:hover:bg-surface-darkHover transition-all duration-300 shadow-sm hover:shadow-md group-hover:-translate-y-0.5"
									>
										Read Paper
										<svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}