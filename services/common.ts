import qs from 'qs';

export const API_BASE = process.env.NEXT_PUBLIC_TMDB_API_BASE;
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function tmdbListFetcher(url: string, page: number) {
  const q = qs.stringify({
    api_key: API_KEY,
    page,
  });
  const res = await fetch(`${url}?${q}`);

  return await res.json();
}

export function tmdbMultiFetcher(...urls: string[]) {
  const q = qs.stringify({
    api_key: API_KEY,
    page: 1,
  });
  const f = (u: string) => fetch(`${API_BASE}${u}?${q}`).then((r) => r.json());

  if (urls.length > 1) {
    return Promise.all(urls.map(f));
  }

  return f(urls[0]);
}
