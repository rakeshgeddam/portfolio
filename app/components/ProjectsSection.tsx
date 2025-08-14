'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		name: 'AI Powered Tech Mentor',
		url: 'https://github.com/rakeshgeddam/AI_Powered_Tech_Mentor',
		description: 'AI-powered mentor platform for personalized tech guidance and learning. (No public description available on GitHub)',
		language: 'TypeScript',
		thumbnail: '/thumbnails/ai_mentor.png', // Add your image file here
	},
	{
		name: 'Smart Code Editor',
		url: 'https://github.com/rakeshgeddam/Smart_Code_Editor',
		description: 'Code editor powered by Vector Database to retrieve error support from historical logs.',
		language: 'Python',
		thumbnail: '/thumbnails/samrt-code-editor.png',
	},
	{
		name: 'AWS EMR ADHD',
		url: 'https://github.com/rakeshgeddam/AWS_EMR_ADHD',
		description: 'Project leveraging AWS EMR for scalable data processing. (No public description available on GitHub)',
		language: 'Python',
		thumbnail: '/thumbnails/AWS_EMR.png',
	},
	{
		name: '8 bit x86 Microprocessor Compiler',
		url: 'https://github.com/rakeshgeddam/565_Project',
		description: 'Academic or research project repository. (No public description available on GitHub)',
		language: 'Python',
		thumbnail: '/thumbnails/comiler.png',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900"
				>
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{projects.map((project) => (
						<motion.div
							key={project.url}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
							className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg flex flex-col transition-transform duration-200"
						>
							{project.thumbnail && (
								<img
									src={project.thumbnail}
									alt={project.name + ' thumbnail'}
									className="w-full h-48 object-cover object-center border-b border-gray-100"
								/>
							)}
							<div className="p-8 flex flex-col flex-1">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
									<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">{project.language}</span>
								</div>
								<p className="text-gray-600 mb-6 flex-1">{project.description}</p>
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-auto text-blue-600 font-semibold hover:underline"
								>
									View on GitHub &rarr;
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
