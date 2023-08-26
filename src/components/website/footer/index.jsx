import Image from 'next/image'

export const Footer = () => (
  <footer className="bg-slate-light font-dm-sans">
    <div className="mx-6 max-w-default py-12 md:m-auto md:py-[90px]">
      <div className="items-center md:flex md:space-x-12">
        <a href="/" className="flex items-center gap-3">
          <Image
            className="h-8 cursor-pointer object-contain md:h-auto"
            src="/assets/logos/appreci.png"
            alt="Logo"
            width={26}
            height={60}
          />
          <span className="font-dm-sans text-3xl">Appreci bot</span>
        </a>
        <p className="mt-6 text-sm font-normal text-slate-body md:mt-0 md:w-1/5">
          Peer appreciation tool on Slack.
        </p>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between">
        <p> Copyright {new Date().getFullYear()} </p>
        {/* <div className="flex space-x-10">
          <img src="/assets/footers/twitter.svg" />
          <img src="/assets/footers/facebook.svg" />
          <img src="/assets/footers/youtube.svg" />
        </div> */}
      </div>
    </div>
  </footer>
)
