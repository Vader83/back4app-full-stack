export function formatDate(datetimeString) {
  const date = new Date(datetimeString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}