/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is set by the deploy
  // workflow (empty locally, "/appreci-webapp" on Pages) and is also read by
  // src/utils/asset-path.ts, since unoptimized images bypass basePath.
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
}

module.exports = nextConfig
