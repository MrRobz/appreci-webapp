import { Hero } from '@/components/website/hero'
import { Nav } from '@/components/website/nav'
import { Steps } from '@/components/website/steps'
import { Feature9 } from '@/components/website/features/feature9'
import { Feature8 } from '@/components/website/features/feature8'
import { CTA } from '@/components/website/cta'
import { Footer } from '@/components/website/footer'

export default function Home() {
  return (
    <main className="flex min-h-full min-w-full flex-col bg-background">
      <Nav />

      <Hero />

      <Steps />

      <Feature9 />
      <Feature8 />

      <CTA />

      <Footer />
    </main>
  )
}
