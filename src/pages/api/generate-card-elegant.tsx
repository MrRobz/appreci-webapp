/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';

export const config = {
  runtime: 'edge',
};

const font1 = fetch(
  new URL('../../assets/Poppins-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const imageMargin = (itemLength: number, index: number): CSSProperties => {
  if (itemLength === 1) {
    return {};
  }
  if (itemLength === 2) {
    return index === 0 ? { marginRight: '-16px' } : { marginLeft: '-16px' };
  }
  if (itemLength === 3) {
    if (index === 0) {
      return { marginRight: '-32px' };
    }
    if (index === 2) {
      return { marginLeft: '-32px' };
    }
  }

  return {};
};

export default async function handler(req: NextRequest) {
  try {
    const [font1Data] = await Promise.all([font1]);

    const { searchParams } = new URL(req.url);

    const company = searchParams.get('company');
    const appreciateValue = searchParams.get('kValue');
    const appreciateContent = searchParams.get('kContent') || '';
    const avatarImgs = searchParams.getAll('kAvatarImg[]') || [];
    const kudosFrom = searchParams.getAll('kFrom') || '';

    const lettersInOneLine = 32;
    const noOfNewLines = (appreciateContent.match(/\n/g) || []).length;
    const lines =
      Math.ceil(appreciateContent.length / lettersInOneLine) + noOfNewLines;
    const imgHeight = avatarImgs.length ? 360 : 0;
    const height = 360 + imgHeight + lines * 55 + (lines - 1) * 20;

    return new ImageResponse(
      (
        <div
          tw="w-full h-full px-12 py-16 flex flex-col"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0D0968',
          }}
        >
          <div tw="flex text-white absolute top-8 left-12">{company}</div>

          <div
            tw="p-6 w-full h-full flex rounded-2xl"
            style={{
              backgroundColor: '#EEF2FF',
            }}
          >
            <div
              tw="px-6 flex flex-col w-full rounded-xl"
              style={{
                border: '3px dashed #5C45FF',
              }}
            >
              <div
                tw="w-full flex justify-center uppercase mt-2"
                style={{
                  color: '#5C45FF',
                  fontSize: '70px',
                  fontFamily: 'Poppins',
                }}
              >
                {appreciateValue}
              </div>

              {avatarImgs?.length > 0 && (
                <div tw="w-full flex justify-center">
                  <div tw="flex items-center justify-center ">
                    <div tw="flex relative">
                      {avatarImgs.map((avatar, idx) => (
                        <div
                          tw="pt-16 flex h-80 w-80 rounded-2xl items-center justify-center"
                          key={avatar}
                          style={{
                            ...imageMargin(avatarImgs.length, idx),
                          }}
                        >
                          <img
                            tw="flex rounded-2xl h-80 w-80"
                            src={avatar}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div
                tw="mt-18 flex text-5xl flex-col"
                style={{
                  fontFamily: 'Poppins',
                  lineHeight: '150%',
                  color: '#0D0968',
                }}
              >
                {appreciateContent.split(/\n/).map((item, idx) => {
                  return <div key={idx}>{item}</div>;
                })}
              </div>
            </div>
          </div>

          <div tw="flex mt-4 mr-2 text-white justify-end text-lg">
            From {kudosFrom}
          </div>
        </div>
      ),
      {
        width: 1080,
        height: height,
        fonts: [
          {
            name: 'Poppins',
            data: font1Data,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
