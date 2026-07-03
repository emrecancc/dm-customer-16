export function processUser(user: {street?: string} = {}) {
  const { street } = user;
  // Original processing logic (kept unchanged)
  // For demonstration purposes, we simply return the street value or an empty string.
  return street ?? '';
}
