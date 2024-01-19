import type { Product } from "@/components/Product/ProductType";
import createFilterStrategies from "./createFilterStrategies";

export type FilterStrategy = Record<string, any>;

export const filterStrategies = {
  whey: {
    ...createFilterStrategies<Product>(
      "protein",
      "range",
      "high protein",
      "g",
      false,
      2
    ),
    ...createFilterStrategies<Product>(
      "price",
      "range",
      "cheap",
      "EUR",
      true,
      5
    ),
    ...createFilterStrategies<Product>("fat", "range", "low fat", "g", true, 1),
    ...createFilterStrategies<Product>(
      "calories",
      "range",
      "low carbohydrates",
      "g",
      true,
      1
    ),
    ...createFilterStrategies<Product>(
      "bcaaTotal",
      "range",
      "high BCAA's",
      "g",
      false,
      2
    ),
    ...createFilterStrategies<Product>(
      "aminosTotal",
      "range",
      "high Amino's",
      "g",
      false,
      2
    ),
    ...createFilterStrategies<Product>("vegan", "boolean", "Vegan"),
  },
};
