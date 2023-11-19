const isProd = process.env.NODE_ENV === 'production';

// export const serverUrl = 'https://server.apprecibot.com'
export const SERVER_URL = isProd
  ? 'https://server.apprecibot.com'
  : 'https://b606-117-216-8-25.ngrok-free.app';
