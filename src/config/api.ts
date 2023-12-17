const isProd = process.env.NODE_ENV === 'production';

// export const serverUrl = 'https://server.apprecibot.com'
export const SERVER_URL = isProd
  ? 'https://server.apprecibot.com'
  : 'https://3ad4-59-99-44-184.ngrok-free.app';
