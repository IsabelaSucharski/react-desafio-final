export function normalizeTextToImageName(name: string) {
  const n = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(" ", "_")
    .concat(".png");
  return n;
}
