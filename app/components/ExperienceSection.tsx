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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-gray-900"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company + exp.title + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/3 flex flex-col justify-center items-start">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{exp.company}</h3>
                <div className="text-sm text-gray-600 mb-1">{exp.title}</div>
                <div className="text-xs text-gray-500">{exp.period} | {exp.location}</div>
              </div>
              <div className="md:w-2/3">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
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
