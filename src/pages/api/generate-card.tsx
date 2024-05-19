/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';
import {
  rocketImageUrl,
  star1ImageUrl,
  star2ImageUrl,
} from './constants/card-images';

export const config = {
  runtime: 'edge',
};

const juaFont = fetch(
  new URL('../../assets/jua-regular-webfont.woff', import.meta.url)
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

const getValueFontSize = (appreciateValue: string): string => {
  const length = appreciateValue.length;
  if (length <= 20) {
    return '80px';
  } else if (length >= 20 && length < 30) {
    return '60px';
  } else if (length >= 30 && length < 40) {
    return '40px';
  } else if (length >= 40 && length < 45) {
    return '38px';
  } else if (length >= 45 && length < 50) {
    return '34px';
  } else if (length >= 50 && length < 55) {
    return '30px';
  } else if (length >= 55 && length < 60) {
    return '28px';
  }

  return '20px';
};

export default async function handler(req: NextRequest) {
  try {
    const [juaFontData] = await Promise.all([juaFont]);

    const { searchParams } = new URL(req.url);

    const appreciateValue = searchParams.get('kValue') || '';
    const company = searchParams.get('company') || '';
    const appreciateContent = searchParams.get('kContent') || '';
    const avatarImgs = searchParams.getAll('kAvatarImg[]') || [];

    const lettersInOneLine = 40;
    const noOfNewLines = (appreciateContent.match(/\n/g) || []).length;
    const lines =
      Math.ceil(appreciateContent.length / lettersInOneLine) + noOfNewLines;
    const imgHeight = avatarImgs.length ? 300 : 0;
    const height = 500 + imgHeight + lines * 70 + 50;

    const imageWidth = 1080;

    const appreciateValueFontSize = getValueFontSize(appreciateValue);

    return new ImageResponse(
      (
        <div
          tw="w-full h-full flex"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#EBEBEB',
          }}
        >
          <div tw="py-11 px-14 w-full h-full flex flex-col">
            <div tw="flex">{company}</div>

            <div
              tw="mt-8 w-full flex justify-center uppercase pt-3"
              style={{
                color: '#9C57FF',
                fontFamily: 'Jua',
                fontSize: appreciateValueFontSize,
              }}
            >
              {appreciateValue}
            </div>
            <div
              tw="mt-4 w-full flex justify-center"
              style={{
                borderBottom: '5.5px solid #F8D966',
              }}
            />

            {avatarImgs?.length > 0 && (
              <div tw="mt-28 w-full flex justify-center">
                <div tw="flex items-center justify-center ">
                  <div tw="flex relative">
                    {avatarImgs.map((avatar, idx) => (
                      <div
                        tw="flex h-80 w-80 rounded-full bg-white items-center justify-center"
                        key={avatar}
                        style={{
                          ...imageMargin(avatarImgs.length, idx),
                        }}
                      >
                        <img
                          tw="flex rounded-full "
                          src={avatar}
                          alt=""
                          style={{
                            width: '250px',
                            height: '250px',
                            background: '#E5DCFF',
                          }}
                        />
                      </div>
                    ))}

                    <img
                      alt=""
                      tw="absolute h-30"
                      src={rocketImageUrl}
                      style={{
                        top: -28,
                        right: -12,
                      }}
                    />

                    <div
                      tw="flex absolute h-28 w-28 rounded-full items-center justify-center"
                      style={{
                        left: -40,
                        top: -30,
                        background: '#B079FF',
                      }}
                    >
                      <img alt="" tw="flex h-24 w-24" src={star1ImageUrl} />
                    </div>

                    <div
                      tw="absolute h-5 w-5 rounded-full bg-white"
                      style={{
                        right: -20,
                        top: 60,
                      }}
                    />

                    <div
                      tw="absolute h-11 w-11 rounded-full bg-white"
                      style={{
                        left: -20,
                        bottom: 20,
                      }}
                    />

                    <div
                      tw="absolute flex"
                      style={{
                        right: 30,
                        bottom: -52,
                      }}
                    >
                      <img alt="" tw="h-28 w-28" src={star2ImageUrl} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              tw="mt-24 flex text-5xl flex-col"
              style={{ fontFamily: 'Jua', lineHeight: '89px' }}
            >
              {appreciateContent.split(/\n/).map((item, idx) => {
                return <div key={idx}>{item}</div>;
              })}
            </div>
          </div>
        </div>
      ),
      {
        width: imageWidth,
        height: height,
        emoji: 'fluent',
        fonts: [
          {
            name: 'Jua',
            data: juaFontData,
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
