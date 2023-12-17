import { SERVER_URL } from '@/config/api';
import Image from 'next/image';

export const Nav = () => {
  return (
    <section className="bg-slate-light font-dm-sans">
      <nav>
        <div className="m-auto max-w-default px-6 pt-6 md:px-0 md:pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
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
            </div>
            {/* <div className="relative">
              <a
                href={`${SERVER_URL}/api/v1/app/auth/slack`}
                className="text-slate-600 hover:text-slate-800"
              >
                Sign in
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </section>
  );
};
