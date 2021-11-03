import { formatDistance } from 'date-fns';

export function updatedAtConverter(date: string) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}
