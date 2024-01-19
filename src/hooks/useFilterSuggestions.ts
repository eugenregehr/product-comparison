import { ref, watch, Ref } from "vue";
import { filterStrategies } from "../services/filterStrategies";

export default function useFilterSuggestions(
  category: string,
  filters: Ref<string[]>
) {
  const suggestions: Ref<any[]> = ref([]);

  const updateSuggestions = () => {
    const categoryValue = category ? category : null;
    const availableFilters = categoryValue
      ? Object.keys(
          filterStrategies[categoryValue as keyof typeof filterStrategies]
        )
      : [];

    const excludedSuggestions = [...filters.value];
    filters.value.forEach((filter) => {
      if (filter.includes("viel")) {
        const oppositeFilter = filter.replace("viel", "wenig");
        excludedSuggestions.push(oppositeFilter.trim());
      } else if (filter.includes("wenig")) {
        const oppositeFilter = filter.replace("wenig", "viel");
        excludedSuggestions.push(oppositeFilter.trim());
      }
    });

    suggestions.value = availableFilters.filter(
      (item) => !excludedSuggestions.includes(item)
    );
  };

  watch([category, filters], updateSuggestions, { immediate: true });

  return { suggestions, updateSuggestions };
}
