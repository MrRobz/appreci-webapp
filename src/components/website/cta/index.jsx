const PrimaryButton = () => (
  <div className="pt-12">
    <a href="https://server.apprecibot.com/slack/install">
      <button className="rounded-lg bg-primary px-12 py-4 font-dm-sans text-desktop-paragraph font-medium text-white hover:opacity-90">
        Add to Slack for free
      </button>
    </a>
  </div>
)

export const CTA = () => (
  <section className="bg-slate-light px-6 py-16 md:px-0 md:py-[90px]">
    <div className="max-w-6xl rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end px-6 py-16 text-center md:m-auto md:py-24">
      <div className="m-auto max-w-xl">
        <h5 className="font-dm-sans text-base font-bold uppercase text-slate-orange">
          Give KUDOS and
        </h5>
        <h2 className="mt-[18px] font-dm-sans text-mobile-h2 font-medium leading-snug md:text-desktop-h2">
          Celebrate wins together
        </h2>
        <p className="mt-[14px] font-dm-sans text-desktop-paragraph text-slate-body">
          Keep each other positive by recognising each other regularly.
        </p>
      </div>
      <PrimaryButton />
    </div>
  </section>
)
