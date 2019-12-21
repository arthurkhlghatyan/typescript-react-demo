import { proxyUrl } from './proxy';

export default async (urls: string[]) => {
  try {
    const map = (url: string) => {
      return fetch(`${proxyUrl}/${url}`)
            .then(response => response.json());
    };

    return await Promise.all(urls.map(map));
  } catch (error) {
    throw new Error(error.message);
  }
};
