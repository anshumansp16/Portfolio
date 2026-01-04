import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProjectCard } from '@/components/ui/ProjectCard'

export const metadata: Metadata = {
  title: 'Work - Anshuman Parmar',
  description: 'Explore my portfolio of AI-driven enterprise solutions and scalable systems.',
}

const projects = [
  {
    title: 'Enterprise AI Platform',
    description: 'Built a scalable AI orchestration platform processing 50,000+ daily tasks with 99.9% uptime, reducing deployment time by 60% through intelligent automation.',
    category: 'AI Infrastructure',
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'AWS'],
    link: '/work/ai-platform',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Tasks/Day', value: '50K+' },
      { label: 'Time Saved', value: '60%' },
    ],
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Developed NLP-powered document analysis system with 85% accuracy, automating data extraction for enterprise clients and generating significant revenue impact.',
    category: 'Natural Language Processing',
    tags: ['NLP', 'PyTorch', 'FastAPI', 'React'],
    link: '/work/document-ai',
    metrics: [
      { label: 'Accuracy', value: '85%' },
      { label: 'Revenue', value: '$2.3M' },
      { label: 'Automation', value: '100%' },
    ],
  },
  {
    title: 'Real-Time Analytics Engine',
    description: 'Architected high-throughput data pipeline handling 10,000+ concurrent requests with sub-second latency, enabling real-time business intelligence at scale.',
    category: 'Data Engineering',
    tags: ['Apache Kafka', 'Redis', 'PostgreSQL', 'Go'],
    link: '/work/analytics-engine',
    metrics: [
      { label: 'Requests', value: '10K+' },
      { label: 'Latency', value: '<1s' },
      { label: 'Data/Day', value: '5TB' },
    ],
  },
  {
    title: 'Cloud Migration & Optimization',
    description: 'Led enterprise cloud migration strategy, reducing infrastructure costs by 45% while improving performance and implementing auto-scaling solutions for peak efficiency.',
    category: 'Cloud Architecture',
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    link: '/work/cloud-migration',
    metrics: [
      { label: 'Cost Saved', value: '45%' },
      { label: 'Performance', value: '+35%' },
      { label: 'Availability', value: '99.99%' },
    ],
  },
  {
    title: 'Predictive Maintenance System',
    description: 'Implemented ML-based predictive analytics reducing equipment downtime by 70%, saving millions in operational costs through intelligent forecasting and proactive interventions.',
    category: 'Machine Learning',
    tags: ['Scikit-learn', 'Time Series', 'Azure', 'Power BI'],
    link: '/work/predictive-maintenance',
    metrics: [
      { label: 'Downtime', value: '-70%' },
      { label: 'Savings', value: '$5M+' },
      { label: 'Accuracy', value: '92%' },
    ],
  },
  {
    title: 'Microservices Architecture',
    description: 'Designed distributed system with API gateway serving 1M+ requests daily, ensuring scalability, fault tolerance, and seamless service orchestration across the platform.',
    category: 'System Design',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'RabbitMQ'],
    link: '/work/microservices',
    metrics: [
      { label: 'Requests', value: '1M+' },
      { label: 'Services', value: '25+' },
      { label: 'Latency', value: '50ms' },
    ],
  },
]

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-noir-primary pt-32 pb-20">
      {/* Hero Section */}
      <Container size="wide">
        <div className="text-center space-y-6 mb-20">
          <p className="text-label text-graphite">MY WORK</p>
          <h1 className="text-display-md font-display text-platinum">
            Portfolio & Case Studies
          </h1>
          <p className="text-body text-silver/70 max-w-2xl mx-auto">
            Transforming enterprise challenges into scalable AI solutions. Each
            project represents a commitment to excellence, innovation, and
            measurable business impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-body text-silver/70 mb-6">
            Interested in collaborating on your next project?
          </p>
          <a href="/connect" className="luxury-button group inline-flex">
            <span className="relative z-10">Let's Build Something Amazing</span>
          </a>
        </div>
      </Container>
    </main>
  )
}
