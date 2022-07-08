export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function argmax(array: number[]) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

export function classify(prediction: number[]) {
  const idx = argmax(prediction);

  return { type: idx, perc: prediction[idx] };
}
