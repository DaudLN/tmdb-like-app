export default function ms(t: string): number {
  const n: Record<string, number> = {
      ms: 1,
      s: 1e3,
      m: 6e4,
      h: 36e5,
      d: 864e5,
      w: 6048e5,
      mo: 2592e6,
      y: 31536e6,
    },
    a = t.match(/^(-?\d*\.?\d+)\s*([a-z]*)$/i);
  if (!a) return NaN;
  const r = parseFloat(a[1]),
    e = a[2].toLowerCase();
  if (!Object.prototype.hasOwnProperty.call(n, e)) return NaN;
  return r * n[e];
}
