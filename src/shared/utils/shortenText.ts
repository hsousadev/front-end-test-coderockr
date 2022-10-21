export default function shortenText(text: string, maxLength: number) {
  if (!text) return null;

  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength)}...`;
}
