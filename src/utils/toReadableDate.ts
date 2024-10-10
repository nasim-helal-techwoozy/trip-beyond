export function toReadableDate(dateString: string): string {
  const date = new Date(dateString);

  // Get the day of the week, day, month, and year
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Full name of the day (e.g., Wednesday)
    day: "numeric", // Day of the month (e.g., 15)
    month: "short", // Short month name (e.g., Sep)
    year: "2-digit", // Two-digit year (e.g., 21)
  };

  return date.toLocaleDateString("en-US", options);
}
