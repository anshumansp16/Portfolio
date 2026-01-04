import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights - Anshuman Parmar',
  description: 'Thoughts on AI, enterprise architecture, and building scalable systems.',
}

const articles = [
  {
    title: 'Building Resilient AI Systems: Lessons from Production',
    excerpt: 'What I learned deploying ML models at scale and ensuring 99.9% uptime in enterprise environments through robust architecture and monitoring.',
    category: 'AI Architecture',
    readTime: '8 min read',
    date: 'Dec 2024',
    link: '/insights/resilient-ai-systems',
  },
  {
    title: 'The Hidden Cost of Technical Debt in ML Pipelines',
    excerpt: 'How poor architectural decisions in machine learning projects compound over time and practical strategies to address them effectively.',
    category: 'Best Practices',
    readTime: '6 min read',
    date: 'Nov 2024',
    link: '/insights/ml-technical-debt',
  },
  {
    title: 'From Monolith to Microservices: A Migration Story',
    excerpt: 'Our journey migrating a legacy system to cloud-native microservices without downtime, including challenges faced and lessons learned.',
    category: 'System Design',
    readTime: '10 min read',
    date: 'Oct 2024',
    link: '/insights/microservices-migration',
  },
  {
    title: 'Optimizing Inference Latency for Real-Time AI',
    excerpt: 'Techniques for reducing model inference time from seconds to milliseconds in production through optimization and smart architecture.',
    category: 'Performance',
    readTime: '7 min read',
    date: 'Sep 2024',
    link: '/insights/inference-optimization',
  },
]

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen bg-noir-primary pt-32 pb-20">
      <Container size="wide">
        <div className="text-center space-y-6 mb-20">
          <p className="text-label text-graphite">INSIGHTS</p>
          <h1 className="text-display-md font-display text-platinum">
            Thoughts & Perspectives
          </h1>
          <p className="text-body text-silver/70 max-w-2xl mx-auto">
            Reflections on AI architecture, system design, and the art of building
            scalable enterprise solutions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {articles.map((article) => (
            <Link key={article.title} href={article.link}>
              <Card className="h-full cursor-pointer">
                <p className="text-label text-accent-gold mb-3">
                  {article.category}
                </p>
                <h2 className="text-headline-sm font-display text-platinum mb-4 group-hover:text-accent-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-body-sm text-silver/70 mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-graphite text-label-sm pt-4 border-t border-white/[0.06]">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="text-center max-w-2xl mx-auto">
          <Card>
            <h3 className="text-headline-sm font-display text-platinum mb-4">
              Stay Updated
            </h3>
            <p className="text-body-sm text-silver/70 mb-6">
              Get notified when I publish new insights on AI architecture and
              system design.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-noir-subtle border border-white/[0.06] rounded-lg text-platinum focus:border-accent-gold/50 focus:outline-none transition-colors"
              />
              <button type="submit" className="luxury-button">
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </Card>
        </div>
      </Container>
    </main>
  )
}
