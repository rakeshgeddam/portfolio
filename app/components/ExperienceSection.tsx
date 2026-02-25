'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Melo',
    title: 'Software Engineer Intern',
    period: 'Sep. 2024 – Feb. 2025',
    location: 'Boston, MA',
    highlights: [
      'Fine tuned Gemini 2.0 using Google AI studio for healthcare chatbot providing personalised support.',
      'Built proprietary Language-Model with conversational dataset; increased accuracy in chatbot responses by 50%.',
      'Enhanced UX accessibility issues for users with ADHD resulting in increased page visits by 30% (A/B testing).',
      'Stack: JavaScript (React); PHP (WordPress); Linux (Ubuntu); OpenAI; Gemini; MySQL.'
    ]
  },
  {
    company: 'University of Michigan - Flint',
    title: 'Research Assistant',
    period: 'Aug. 2023 – Apr. 2024',
    location: 'Flint, MI',
    highlights: [
      'Developed a time-series prediction model with LSTM algorithm for limited data using TensorFlow, reducing research time from 1 year to 6 months (50%).',
      'Implemented multiple ML algorithms (Linear regression, SVM, Neural networks) to improve the accuracy of the prediction model, reducing mean-squared error from 576 to 52.',
      'Contributed to peer-reviewed research paper named ‘High-strain Rate Impact…’ presented at American Society of Mechanical Engineering.'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    title: 'Assistant System Engineer',
    period: 'Apr. 2021 – Jan. 2023',
    location: 'Hyderabad, India',
    highlights: [
      'Optimized Apache Spark resource allocation, reducing data migration time by 50% and improving system reliability during ETL processing.',
      'Developed 5+ reusable PySpark modules to enhance code modularity and reduce technical debt across large-scale data workflows.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Experience</h2>
          <p className="text-foreground/60 mt-4 text-lg">My professional journey in software engineering and research.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-border dark:before:via-surface-darkBorder before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-surface dark:bg-surface-dark border border-surface-border dark:border-surface-darkBorder shadow-sm hover:shadow-soft-hover dark:hover:shadow-soft-hover-dark transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 bg-surface-hover dark:bg-surface-darkHover text-foreground/70 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="text-accent font-medium mb-4">{exp.title}</div>
                <ul className="space-y-3 text-sm text-foreground/70">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
