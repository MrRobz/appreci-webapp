import { assetPath } from '@/utils/asset-path';
import Image from 'next/image';
import { ReactElement } from 'react';

interface Props {}

export const LeftNav = ({}: Props): ReactElement => {
  return (
    <div className="flex h-full w-72 flex-col items-center justify-between border-r border-t border-gray-200 bg-white px-4 py-8">
      <div>
        <div className="flex items-center gap-2">
          <Image
            className="h-12 object-contain"
            src={assetPath('/assets/logos/appreci.png')}
            alt="Logo"
            width={26}
            height={60}
          />
          <span className="font-dm-sans text-2xl">Appreci bot</span>
        </div>
      </div>

      <div>Logout</div>
    </div>
  );
};
