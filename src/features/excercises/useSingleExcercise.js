import { useQuery } from "@tanstack/react-query";
import { getExcerciseById } from "../../services/apiSets";

export function useSingleExcercise(excerciseId) {
  const {
    isLoading,
    data: excercise,
    error,
  } = useQuery({
    queryKey: ["excercise", excerciseId],
    queryFn: () => getExcerciseById(excerciseId),
  });

  return { isLoading, excercise, error };
}
