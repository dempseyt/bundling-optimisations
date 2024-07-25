import { map } from "ramda";

export function scaleList(collection, scaleFactor) {
  const scale = (x) => x * scaleFactor;
  return map(scale, collection);
}

function deadFunc() {
  return ue;
}
