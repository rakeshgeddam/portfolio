'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
			<HeroSection />
			<ProjectsSection />
			<ExperienceSection />
			<PublicationsSection />
			<ContactSection />
		</main>
	);
}
