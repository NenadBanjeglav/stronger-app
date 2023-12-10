import { useQuery } from "@tanstack/react-query";
import { getWorkouts } from "../../services/apiWorkouts";
import { useUser } from "../authentication/useUser";

export function useWorkouts() {
  const {
    user: { id },
  } = useUser();

  const {
    isLoading,
    data: workouts,
    error,
  } = useQuery({
    queryKey: ["workouts", id],
    queryFn: () => getWorkouts(id),
  });

  return { isLoading, workouts, error };
}
