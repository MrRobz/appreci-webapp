const PrimaryButton = () => (
  <div className="pt-12">
    <button className="rounded-lg bg-slate-blue px-12 py-4 font-dm-sans text-desktop-paragraph font-medium text-white hover:opacity-90">
      Download for free
    </button>
  </div>
)

export const CTA = () => (
  <section className="bg-slate-light px-6 py-16 md:px-0 md:py-[90px]">
    <div className="max-w-6xl rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end px-6 py-16 text-center md:m-auto md:py-24">
      <div className="m-auto max-w-xl">
        <h5 className="font-dm-sans text-base font-bold uppercase text-slate-orange">
          Call to action section
        </h5>
        <h2 className="mt-[18px] font-dm-sans text-mobile-h2 font-medium leading-snug md:text-desktop-h2">
          Bring more attention to a feature with a wide layout.
        </h2>
        <p className="mt-[14px] font-dm-sans text-desktop-paragraph text-slate-body">
          Once you’ve communicated your value proposition, shed some light on
          critical features loved by your customers.
        </p>
      </div>
      <PrimaryButton />
    </div>
  </section>
)
