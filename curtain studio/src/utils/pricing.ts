export type PriceRange = { min: number; max: number };

/**
 * Parses common SA price strings used in this project.
 * Examples:
 *  - "R750–R1,200"
 *  - "R250–R500 per window"
 *  - "From R200"
 *  - "R180" (single)
 */
export function parseZARRange(input: string): PriceRange {
  const raw = input.trim();
  if (!raw) return { min: 0, max: 0 };

  const cleaned = raw
    .replace(/per\s+window/gi, "")
    .replace(/per\s+job/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  const isFrom = /^from\s+/i.test(cleaned);
  const nums = cleaned
    .replace(/from\s+/i, "")
    .match(/[0-9][0-9,]*/g)
    ?.map((n) => Number(n.replace(/,/g, "")))
    .filter((n) => Number.isFinite(n) && n >= 0);

  if (!nums || nums.length === 0) return { min: 0, max: 0 };

  if (nums.length === 1) {
    const min = nums[0];
    // "From" means open-ended. We give a sensible max for estimating.
    const max = isFrom ? Math.round(min * 1.5) : min;
    return { min, max };
  }

  // take first two numbers as range
  const [a, b] = nums;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return { min, max };
}

export function formatZAR(value: number): string {
  const rounded = Math.round(value);
  return "R" + rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function addRanges(a: PriceRange, b: PriceRange): PriceRange {
  return { min: a.min + b.min, max: a.max + b.max };
}

export function mulRange(a: PriceRange, factor: number): PriceRange {
  return { min: a.min * factor, max: a.max * factor };
}
