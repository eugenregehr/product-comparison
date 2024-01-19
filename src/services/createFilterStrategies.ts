export default function createFilterStrategies<T>(
  key: string,
  type: "range" | "boolean",
  displayName: string,
  dimension: string = "",
  isGoodWhenLess: boolean = false,
  weight: number = 1
): Record<string, any> {
  const strategies: Record<string, any> = {};

  if (type === "range") {
    strategies[displayName] = {
      filter: (products: T[]) =>
        products.sort((a: any, b: any) =>
          isGoodWhenLess ? a[key] - b[key] : b[key] - a[key]
        ),
      attribute: key,
      displayName,
      isGoodWhenLess,
      type,
      weight,
      dimension,
    };
  } else if (type === "boolean") {
    strategies[displayName] = {
      filter: (product: T) => (product as any)[key],
      attribute: key,
      displayName,
      type,
      weight,
      dimension,
    };
  }

  return strategies;
}
