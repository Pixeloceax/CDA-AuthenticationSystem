export default function isSet(value: any): boolean {
  return typeof value !== "undefined" && value !== null;
}
