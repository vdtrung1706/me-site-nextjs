import { format, formatDistance } from 'date-fns';
import { TMDBMovie, TMDBTv } from '../types/common';

export function updatedAtConverter(date: string) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export function createIdByWords(words: string) {
  return words
    .toLowerCase()
    .split(' ')
    .filter((s) => s.length > 0 && s.trim())
    .join('-');
}

export function formatDate(date: number | Date) {
  return format(date, 'MMM d, yyyy');
}

export function formatVoteAverage(num: number) {
  return `${Math.ceil(num) * 10}%`;
}

export function createHrefOfTMDB(id: number, name: string) {
  return `https://www.themoviedb.org/tv/${id}-${createIdByWords(name)}`;
}
