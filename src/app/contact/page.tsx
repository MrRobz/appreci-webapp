import { Footer } from '@/components/website/footer'
import { Nav } from '@/components/website/nav'

export default function Contact() {
  return (
    <main className="flex min-h-screen min-w-full flex-col bg-background">
      <Nav />

      <section className="flex-1 bg-slate-light font-dm-sans">
        <div className="m-auto max-w-default px-6 pt-6 md:px-0 md:pt-6">
          <div className="flex flex-col items-center justify-center overflow-hidden pt-32 sm:py-12">
            <div className="max-w-xl px-5 text-center">
              <h2 className="mb-2 mt-10 text-[42px] font-bold text-zinc-800">
                Contact us
              </h2>
              <p className="mb-2 text-lg text-zinc-500">
                Have a question, found a bug, or wish Appreci did something
                more? Let us know. Email us at{' '}
                <a
                  className="font-medium text-indigo-500"
                  href="mailto:support@apprecibot.com"
                >
                  support@apprecibot.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
