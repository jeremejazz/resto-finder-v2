const PriceLevel = {
  Unspecified: "PRICE_LEVEL_UNSPECIFIED",
  Free: "PRICE_LEVEL_FREE",
  Inexpensive: "PRICE_LEVEL_INEXPENSIVE",
  Moderate: "PRICE_LEVEL_MODERATE",
  Expensive: "PRICE_LEVEL_EXPENSIVE",
  VeryExpensive: "PRICE_LEVEL_VERY_EXPENSIVE",
} as const;

type PriceLevel = typeof PriceLevel[keyof typeof PriceLevel];

export function priceLevelToLabel(level: PriceLevel): string | null {
  switch (level) {
    case PriceLevel.Free:
      return "Free";
    case PriceLevel.Inexpensive:
      return "Inexpensive";
    case PriceLevel.Moderate:
      return "Moderate";
    case PriceLevel.Expensive:
      return "Expensive";
    case PriceLevel.VeryExpensive:
      return "Very Expensive";
    default:
      return null;
  }

}
