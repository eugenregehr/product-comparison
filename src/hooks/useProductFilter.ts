import { computed, Ref } from "vue";
import { filterStrategies } from "../services/filterStrategies";
import type { Product } from "@/components/Product/ProductType";
import type { FilterStrategy } from "../services/filterStrategies";

export default function useProductFilter(
  products: Product[],
  category: string,
  filters: Ref<string[]>
) {
  const filteredProducts = computed(() => {
    if (!category || !products || !Array.isArray(products)) return [];

    let result = products.filter((product) => product.category === category);

    const strategies =
      filterStrategies[category as keyof typeof filterStrategies];

    // boolean filter
    filters.value.forEach((filter) => {
      const strategy = strategies[filter];
      if (strategy && strategy.type === "boolean") {
        result = result.filter((product) => strategy.filter(product));
      }
    });

    // calculate score for every product
    const productsWithScores = result.map((product) => ({
      product,
      score: calculateProductScore(product, filters.value, strategies),
    }));

    // higher score should be first
    productsWithScores.sort((a, b) => b.score - a.score);

    // return only products
    return productsWithScores.map((p) => p.product);
  });

  return { filteredProducts };
}

function calculateProductScore(
  product: Product,
  filters: string[],
  strategies: FilterStrategy
) {
  let score: number = 0;
  filters.forEach((filter, index) => {
    const strategy = strategies[filter];
    if (strategy) {
      const value = product[strategy.attribute as keyof Product];
      let adjustedValue: any;

      if (typeof value === "boolean") {
        adjustedValue = value ? 1 : 0;
      } else {
        adjustedValue = value === 0 ? 0.1 : value;
      }

      const weight = 1 / (index + 1);
      score +=
        (strategy.isGoodWhenLess ? 1 / (1 + adjustedValue) : adjustedValue) *
        weight *
        strategy.weight;
    }
  });
  return score;
}
