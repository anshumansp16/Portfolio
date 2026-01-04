import { Hero } from './_components/Hero'
import { Philosophy } from './_components/Philosophy'
import { Metrics } from './_components/Metrics'
import { SelectedSystems } from './_components/SelectedSystems'
import { HowIWork } from './_components/HowIWork'
import { About } from './_components/About'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Scene 1: Arrival */}
      <Hero />

      {/* Scene 2: Doctrine */}
      <Philosophy />

      {/* Scene 3: Proof */}
      <Metrics />

      {/* Scene 4: Selected Systems */}
      <SelectedSystems />

      {/* Scene 5: How I Work */}
      <HowIWork />

      {/* Scene 6: About */}
      <About />

      {/* Scene 7: Footer handled by layout */}
    </main>
  )
}
