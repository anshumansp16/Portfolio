import { Hero } from './_components/Hero'
import { Philosophy } from './_components/Philosophy'
import { Metrics } from './_components/Metrics'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Philosophy />
      <Metrics />
    </main>
  )
}
