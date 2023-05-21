import Image from 'next/image'
import { SlackIcon } from '../icons'

export const Hero = () => {
  return (
    <section className="bg-slate-light pb-[90px] font-dm-sans">
      <section className="mt-0 px-6 md:mt-4 md:px-0">
        <div className="m-auto max-w-default">
          <div className="flex flex-col items-center md:flex-row">
            <div className="order-1 w-full md:order-1 md:mr-[17px]">
              <div className="mt-[90px] md:mt-0">
                <h1 className="text-mobile-h1 font-medium text-slate-headline md:text-desktop-h1">
                  Build stronger, happier teams.
                </h1>
                <p className="mt-4 text-desktop-subheading text-slate-body md:mt-4">
                  With Appreci, easily send kudos to your teammates and
                  recognize their achievements.
                </p>
                <div className="mt-9">
                  <a href="https://slack.com/oauth/v2/authorize?client_id=5093803376433.5104871802944&scope=channels:read,chat:write,chat:write.public,commands,team:read,users.profile:read&user_scope=">
                    <button className="inline-flex w-full justify-between gap-2 rounded-lg bg-primary px-8 py-4 text-desktop-paragraph text-white filter hover:brightness-125 md:w-auto	">
                      Add to slack for free
                      <SlackIcon />
                    </button>
                  </a>
                  <p className="mt-3 text-center font-inter text-[13px] text-slate-500 md:text-left">
                    No credit card required
                  </p>
                </div>
                <div className="mt-12 pb-12 md:mr-5 md:pb-[90px]">
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 md:flex-row md:items-start md:pb-5 md:pl-7 md:pr-10 md:pt-5">
                    <Image
                      className="flex h-20 w-20 rounded-full border border-slate-body md:mt-2"
                      src="/assets/heros/ashwathy.jpeg"
                      width={74}
                      height={74}
                      alt="Person Profile Picture"
                    />
                    <div className="mt-4 text-center md:ml-7 md:mt-0 md:text-left">
                      <p className="font-inter text-desktop-paragraph text-slate-body">
                        “Appreci allows us to invest in our amazing employees,
                        setting us up for long-term success.”
                      </p>
                      <p className="mt-4 font-inter text-[13px] text-slate-body opacity-50 md:mt-1">
                        Ashwathy Philip - People Operations at Drivetrain.ai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt:mt-0 order-2 mt-24 w-full md:order-2 md:mb-[90px] md:ml-[17px]">
              <div className="relative flex items-center justify-center rounded-3xl">
                <Image
                  className="-mb-10 -mt-10 rounded-lg"
                  src="/assets/heros/appreciation-card-4.png"
                  alt=""
                  width={494}
                  height={672}
                />
                <Image
                  className="absolute -bottom-24 left-1/2 -ml-4 -translate-x-1/2 transform"
                  src="/assets/heros/arrow.png"
                  width={234}
                  height={46}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
