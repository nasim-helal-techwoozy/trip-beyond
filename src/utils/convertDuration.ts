export function convertDuration(isoDuration: string): string {
  // Regular expression to capture hours and minutes
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
  const matches = isoDuration.match(regex);

  // Extract hours and minutes (convert undefined to 0)
  const hours = matches && matches[1] ? parseInt(matches[1], 10) : 0;
  const minutes = matches && matches[2] ? parseInt(matches[2], 10) : 0;

  // Format the result
  return `${hours}hrs ${minutes}mins`;
}
