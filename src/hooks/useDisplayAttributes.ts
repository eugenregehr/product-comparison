// useDisplayAttributes.js
import { computed, Ref } from "vue";
import { filterStrategies } from "../services/filterStrategies";

export default function useDisplayAttributes(
  category: string,
  filters: Ref<string[]>
) {
  const displayAttributes = computed(() => {
    const categoryValue = category ? category : null;
    if (!categoryValue) return [];

    const attributes = new Set();
    filters.value.forEach((filter) => {
      const strategy =
        filterStrategies[categoryValue as keyof typeof filterStrategies][
          filter
        ];
      if (strategy && strategy.attribute) {
        attributes.add({
          key: strategy.attribute,
          displayName: strategy.displayName,
          dimension: strategy.dimension,
        });
      }
    });

    return Array.from(attributes);
  });

  return { displayAttributes };
}
