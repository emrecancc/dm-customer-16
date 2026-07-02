import { fetchData } from './fetch';

export const data = (async () => {
  const result = await fetchData();
  return result;
})();