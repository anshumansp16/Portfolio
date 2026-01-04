import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About - Anshuman Parmar',
  description: 'Learn more about my journey in AI architecture and enterprise systems.',
}

const skills = [
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'MLOps'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
  },
  {
    category: 'Backend & Databases',
    items: ['Python', 'Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
]

const experience = [
  {
    role: 'Senior AI Architect & Technical Lead',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Spearheading AI/ML infrastructure initiatives for Fortune 500 clients. Designed and deployed scalable platforms processing 50,000+ daily tasks with 99.9% uptime. Led cross-functional teams in building enterprise-grade AI solutions generating $2.3M+ revenue impact.',
  },
  {
    role: 'Full Stack Engineer & ML Specialist',
    company: 'CloudScale Innovations',
    period: '2020 - 2022',
    description: 'Architected microservices handling 1M+ daily requests with <50ms latency. Built real-time analytics pipelines processing 5TB+ data daily. Reduced infrastructure costs by 45% through cloud optimization and auto-scaling implementations.',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'AI Dynamics Inc.',
    period: '2018 - 2020',
    description: 'Developed NLP-powered document processing systems achieving 85% accuracy. Created predictive maintenance models reducing equipment downtime by 70%, saving $5M+ annually. Built production ML pipelines serving 10,000+ concurrent requests.',
  },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-noir-primary pt-32 pb-20">
      <Container size="wide">
        {/* Hero */}
        <div className="text-center space-y-6 mb-20">
          <p className="text-label text-graphite">ABOUT ME</p>
          <h1 className="text-display-md font-display text-platinum">
            Background & Expertise
          </h1>
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          <p className="text-body-lg text-silver/90 leading-relaxed">
            I'm a Senior AI Architect and Systems Builder specializing in enterprise-scale
            AI solutions. With over 6 years of hands-on experience, I've designed and
            deployed production systems serving millions of users, generating measurable
            business impact through intelligent automation and scalable architecture.
          </p>
          <p className="text-body text-silver/80 leading-relaxed">
            My expertise lies at the intersection of artificial intelligence, cloud
            infrastructure, and full-stack development. From building NLP-powered document
            processing systems to architecting microservices handling 10,000+ concurrent
            requests, I focus on creating solutions that are both technically excellent
            and business-critical.
          </p>
          <p className="text-body text-silver/80 leading-relaxed">
            I believe in building systems that scale—not just in performance, but in
            their ability to evolve with business needs. When I'm not architecting
            solutions, I'm exploring emerging AI research, optimizing cloud costs, or
            contributing to the developer community through open-source work and mentorship.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-headline-lg font-display text-platinum text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <h3 className="text-label text-accent-gold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-noir-subtle border border-white/[0.06] rounded-full text-label-sm text-silver"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className="text-headline-lg font-display text-platinum text-center mb-12">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp) => (
              <Card key={exp.company}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-headline-sm font-display text-platinum mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-body-sm text-accent-gold">{exp.company}</p>
                  </div>
                  <p className="text-label text-graphite mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <p className="text-body-sm text-silver/70">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-body text-silver/70 mb-6">
            Want to learn more or discuss a project?
          </p>
          <a href="/connect" className="luxury-button group inline-flex">
            <span className="relative z-10">Get in Touch</span>
          </a>
        </div>
      </Container>
    </main>
  )
}
