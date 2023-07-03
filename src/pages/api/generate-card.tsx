/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { CSSProperties } from 'react'
import {
  rocketImageUrl,
  star1ImageUrl,
  star2ImageUrl,
} from './constants/card-images'

export const config = {
  runtime: 'edge',
}

const font1 = fetch(
  new URL('../../assets/jua-regular-webfont.woff', import.meta.url)
).then((res) => res.arrayBuffer())

const imageMargin = (itemLength: number, index: number): CSSProperties => {
  if (itemLength === 1) {
    return {}
  }
  if (itemLength === 2) {
    return index === 0 ? { marginRight: '-16px' } : { marginLeft: '-16px' }
  }
  if (itemLength === 3) {
    if (index === 0) {
      return { marginRight: '-32px' }
    }
    if (index === 2) {
      return { marginLeft: '-32px' }
    }
  }

  return {}
}

export default async function handler(req: NextRequest) {
  try {
    const [font1Data] = await Promise.all([font1])

    const { searchParams } = new URL(req.url)

    const company = searchParams.get('company')
    const appreciateValue = searchParams.get('kValue')
    const appreciateContent = searchParams.get('kContent') || ''
    const avatarImgs = searchParams.getAll('kAvatarImg[]') || []

    const lettersInOneLine = 40
    const lines = Math.ceil(appreciateContent.length / lettersInOneLine)
    const imgHeight = avatarImgs.length ? 300 : 0
    const height = 500 + imgHeight + lines * 70 + 50

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
                fontSize: '100px',
                lineHeight: '120px',
                border: '5.5px solid #F8D966',
                fontFamily: 'Jua',
              }}
            >
              {appreciateValue}
            </div>

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
              tw="mt-24 flex text-5xl"
              style={{ fontFamily: 'Jua', lineHeight: '89px' }}
            >
              {appreciateContent}
            </div>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: height,
        fonts: [
          {
            name: 'Jua',
            data: font1Data,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
