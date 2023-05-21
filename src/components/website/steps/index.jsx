const StepTile = ({ image, text, description }) => (
  <div className="h-[262px] w-full rounded-3xl bg-white px-8 py-[50px] text-center transition-all duration-300 hover:shadow-sm">
    <div>
      <img className="m-auto h-12 w-12" src={image} alt={text} />
      <div className="mb-3 mt-11">
        <span className="rounded-full bg-slate-orange px-[14px] py-[5px] text-sm font-medium text-white">
          {text}
        </span>
      </div>
      <p className="mt-3 text-desktop-paragraph font-normal text-slate-body">
        {description}
      </p>
    </div>
  </div>
)

export const Steps = () => (
  <section className="bg-slate-light">
    <div className="m-auto max-w-default px-6 py-12 font-dm-sans md:px-0 md:py-[90px]">
      <div className="m-auto max-w-[589px] text-center">
        <h5 className="text-base font-bold uppercase text-slate-orange">
          Start in seconds
        </h5>
        <h2 className="mt-[18px] text-mobile-h2 font-medium text-slate-body md:text-desktop-h2">
          Get started in four easy steps
        </h2>
      </div>
      <div className="mt-[60px] space-y-[30px] md:flex md:space-x-[30px] md:space-y-0">
        <StepTile
          image={'/assets/steps/mouse.svg'}
          text={'Step 1'}
          description={'Easy one click sign-up'}
        />
        <StepTile
          image={'/assets/steps/gridview.svg'}
          text={'Step 2'}
          description={'Choose a high quality template'}
        />
        <StepTile
          image={'/assets/steps/algorithm.svg'}
          text={'Step 3'}
          description={'Access our API'}
        />
        <StepTile
          image={'/assets/steps/components.svg'}
          text={'Step 4'}
          description={'Generate finished templates'}
        />
      </div>
    </div>
  </section>
)
