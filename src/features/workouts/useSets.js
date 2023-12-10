import { useQuery } from "@tanstack/react-query";
import { getSets } from "../../services/apiSets";

export function useSets(workoutId) {
  const {
    isLoading,
    data: sets,
    error,
  } = useQuery({
    queryKey: ["sets", workoutId],
    queryFn: () => getSets(workoutId),
  });

  return { isLoading, sets, error };
}
