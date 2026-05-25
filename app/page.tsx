'use client';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
			<NavBar />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<PublicationsSection />
			<ContactSection />
		</main>
	);
}
