const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prefix a path under /public with the deployment's basePath.
 *
 * next/image does not do this for us: `images.unoptimized` short-circuits the
 * default loader, which returns `src` untouched. On GitHub Pages the site is
 * served from /appreci-webapp, so a bare "/assets/..." src 404s.
 */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
