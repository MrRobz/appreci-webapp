/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/website/footer'
import { Nav } from '@/components/website/nav'

export default function Subprecessors() {
  return (
    <main className="flex min-h-full min-w-full flex-col bg-background">
      <Nav />

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
        <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
          <div className="prose prose-slate mx-auto lg:prose-lg">
            <h1>Sub-Processors</h1>

            <div>
              <p>
                Appreci bot uses certain sub-processors to assist in providing
                our services. Appreci bot maintains an up-to-date list of the
                names and locations of all sub-processors.
              </p>
              <p>This list of these sub-processers is below</p>

              <ul role="list">
                <li>
                  <a href="https://www.digitalocean.com/" target="_blank">
                    DigitalOcean
                  </a>
                  : servers (USA)
                </li>

                <li>
                  <a href="https://www.cockroachlabs.com/" target="_blank">
                    Cockroachlabs
                  </a>
                  : database (USA)
                </li>

                <li>
                  <a href="https://nextjs.org/" target="_blank">
                    NextJS
                  </a>
                  : Web hosting (USA)
                </li>

                <li>
                  <a href="https://mixpanel.com/" target="_blank">
                    Mixpanel
                  </a>
                  : Aggregate usage tracking (USA)
                </li>

                <li>
                  <a href="https://www.bugsnag.com/" target="_blank">
                    Bugsnag
                  </a>
                  : Application monitoring (USA)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
