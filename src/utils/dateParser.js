export default function dateParser(string, locale) {
  const date = new Date(string);
  return date.toLocaleDateString(locale);
}
