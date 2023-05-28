import Image from 'next/image'

export const Feature9 = () => {
  return (
    <section className="bg-slate-light py-12 font-dm-sans md:py-[90px]">
      <div className="mx-6 max-w-default rounded-3xl bg-white md:m-auto md:h-[580px] md:overflow-y-hidden">
        <div className="h-full items-center justify-center md:flex">
          <div className="mx-6 pt-10 md:mx-0 md:w-1/2 md:pt-0">
            <div className="md:mx-7 md:my-[32px]">
              <Image
                width={516}
                height={532}
                src="/assets/features/feature-banner-1.png"
                alt="banner"
              />
            </div>
          </div>
          <div className="h-full px-6 md:w-1/2 md:px-[102px]">
            <div className="flex h-full items-center">
              <div className="py-12 text-center md:py-0">
                <h2 className="text-mobile-h2 font-medium leading-snug text-slate-headline md:text-desktop-h2">
                  Celebrate in the moment by giving kudos
                </h2>
                <p className="pt-6 font-inter text-desktop-subheading">
                  Celebrate achievements within Slack by sharing kudos with all.
                </p>
                {/* <p className="cursor-pointer pt-6 text-desktop-paragraph underline">
                  Learn more
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
