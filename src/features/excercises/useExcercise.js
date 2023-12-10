import { useQuery } from "@tanstack/react-query";
import { getExcersises } from "../../services/apiExcersises";

export function useExcercise() {
  const {
    isLoading,
    data: excercises,
    error,
  } = useQuery({
    queryKey: ["excercises"],
    queryFn: getExcersises,
  });

  return { isLoading, excercises, error };
}
